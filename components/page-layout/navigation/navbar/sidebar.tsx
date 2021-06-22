import { RefObject, CSSProperties, useState, createContext, useContext } from 'react'
import { useRef, useEffect } from 'react'
import links from '@/lib/navigation'
import Link from 'next/link'
import s from './styles/sidebar.module.css'
import { useGlobalDataContext } from '@/components/page-layout'

interface ChildrenMenu {
  title?: string
  childrens?: any[]
}

type ChildState = [ChildrenMenu, React.Dispatch<ChildrenMenu>]

const sidebarContext = createContext<ChildState>([null, null])
const useChildState = () => useContext(sidebarContext)

const ParentLink = (link: {
  idx: number,
  title?: string,
  href?: string,
  childrens?: any[],
  toggle?: () => void
}) => {
  const { idx, title, href, childrens, toggle } = link
  const css: CSSProperties = { animationDelay: `${(( idx - 1 ) * 200) - 300}ms` as string, paddingRight: '0.5rem' }
  const [, setChildMenu] = useChildState()
  if (childrens) {
    return (
      <div className={s.sidebarLink} onClick={() => setChildMenu(link)}>
        <p
          className="cursor-pointer flex text-right items-center"
          style={css}
        >
          {title}
          <span
            className="cursor-pointer mt-1 ml-2 i jam:chevron-right"
          />
        </p>
      </div>
    )
  } else {
    return (
      <Link href={href || '/'}>
        <a className={s.sidebarLink} onClick={toggle}>
          <p style={css}>{title}</p>
        </a>
      </Link>
    )
  }
}

const Parents = ({ toggle }: { toggle?: () => void }) => {
  const data = useGlobalDataContext()
  return (
    <div className="mb-6" style={{overflowY: 'auto'}}>
      {links(data).map((l, idx) => (
        <ParentLink
          key={idx}
          title={l.titulo}
          idx={idx}
          href={l.href}
          childrens={l.childrens}
          toggle={toggle}
        />
      ))}
    </div>
  )
}

const ChildLink = (link: {
  idx: number,
  title?: string,
  href?: string,
  toggle?: () => void
}) => {
  const { idx, title, href, toggle } = link
  const css: CSSProperties = { animationDelay: `${(( idx - 1 ) * 200) - 300}ms` as string, paddingRight: '0.5rem' }
  return (
    <Link href={href || '/'}>
      <a className={s.childLink} onClick={toggle}>
        <p style={css}>{title}</p>
      </a>
    </Link>
  )
}

const Childs = ({ toggle }: { toggle?: () => void }) => {
  const [childMenu, setChildMenu] = useChildState()
  return (
    <>
      <button
        className={s.backButton}
        onClick={() => setChildMenu(null)}
      >
        <span className="i jam:chevron-left"/>
        Back
      </button>
      <p className={s.childTitle}>{childMenu.title}</p>
      <div className={s.childMenuWrapper}>
        {childMenu.childrens.map((l, idx) => (
          <ChildLink {...l} title={l.titulo} idx={idx} key={idx} toggle={toggle}/>
        ))}
      </div>
    </>
  )
}

const Wrapper = (props: { toggle?: () => void }) => {
  const [childMenu] = useChildState()

  return (
    <div className={s.sidebarWrapper}>
      {childMenu ? <Childs {...props}/> : <Parents {...props}/>}
    </div>
  )
}

export interface SidebarProps {
  open: boolean
  toggle: () => void
}

const Sidebar = ({ open = false, toggle }: SidebarProps) => {
  const sidebarRef: RefObject<HTMLElement> = useRef(null)
  const sidebarState: ChildState = useState(null)
  const [,setSidebarState] = sidebarState

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open)
    document.documentElement.classList.toggle('lg:overflow-auto', open)
  }, [open])

  useEffect(() => {
    if (!open) {
      setSidebarState(null)
    }
  }, [open])

  return (
    <sidebarContext.Provider value={sidebarState}>
      <aside
        className={`${s.sidebar} ${open ? 'open' : ''}`}
        ref={sidebarRef}
        style={{ opacity: `${open ? '1' : '0'}` }}
      >
        <Wrapper toggle={toggle}/>
      </aside>
    </sidebarContext.Provider>
  )
}

export default Sidebar
