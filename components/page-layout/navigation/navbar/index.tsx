import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Hamburger from './hamburguer'
import Sidebar from './sidebar'
import Dropdown from './dropdown'
import s from './styles/navbar.module.css'
import nav from '@/lib/navigation'
import { useGlobalDataContext } from '@/components/page-layout'
import { ShoppingCart24 } from '@carbon/icons-react'
import Image from 'next/image'
import { useSnipcartContext } from '@/components/snipcart'

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const [scrollY, setScrollY] = useState<number>(null)
  const toggleSidebar = () => (setSidebar(!sidebar))
  const globalData = useGlobalDataContext()
  const { cartQty } = useSnipcartContext()

  const scrollHander = () => {
    setScrollY(window.scrollY)
    showingHandler()
  }

  const [isShowing, setShowing] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const showingHandler = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0) {
      return
    }
    // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than some offset
    if (Math.abs(currentScrollPosition - lastScrollPosition) < 128) {
      return
    }
    if (currentScrollPosition > 128) {
      setShowing(currentScrollPosition < lastScrollPosition)
    } else {
      setShowing(true)
    }
    setLastScrollPosition(currentScrollPosition)
  }

  useEffect(() => {
    if (scrollY === null) {
      scrollHander()
    }
    window.addEventListener('scroll', scrollHander, { passive: true })
    return () => (window.removeEventListener('scroll', scrollHander))
  })

  return (
    <>
      <div className={`bg-white border-t border-l duration-500 rounded-tl-lg border-x-gray-200 p-4 transform-gpu right-0 bottom-0 z-10 fixed sm:hidden ${(!sidebar && !isShowing) && 'translate-y-full pointer-events-none'}`}>
        <button className="flex text-x-gray-300 duration-200 items-center snipcart-checkout hover:text-x-gray-800">
          <ShoppingCart24 />
          <span className="font-bold font-title text-sm ml-2 text-x-gray-800">{cartQty}</span>
        </button>
      </div>
      <header className={`${s.header} duration-500 transform-gpu ${(!sidebar && !isShowing) && '-translate-y-full pointer-events-none'}`}>
        <Sidebar open={sidebar} toggle={toggleSidebar} />
        <div className={`${s.headerWrapper} border-b duration-200 ${scrollY > 0 ? 'border-x-gray-200' : 'border-transparent'}`}>
          <div className="flex overflow-hidden pointer-events-auto">
            <Link href="/">
              <a title="Home" className="font-bold font-title my-auto transform text-2xl text-blue-800 duration-200 overflow-hidden hover:scale-95">
                <div className="flex h-full logo justify-center items-center">
                  <Image
                    src="/images/logo-alt.png"
                    alt="Home"
                    title="Home"
                    objectFit="contain"
                    width={90}
                    height={90}
                    quality={90}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className={s.elements}>
            <div className="mr-2 transition-all duration-200 items-center hidden lg:flex">
              {nav(globalData).map((n, i) => n.childrens ? (
                <Fragment key={i}>
                  <Dropdown titulo={n.titulo} links={n.childrens} />
                </Fragment>
              ) : (
                <Link href={n.href || '/'} key={i}>
                  <a className="border-transparent font-bold border-b-[3px] mx-4 -mt-[3px] duration-200 hover:border-yellow-300">{n.titulo}</a>
                </Link>
              ))}
            </div>
            <Link href="/menu">
              <a
                className="bg-transparent rounded-full font-bold font-title border-x-gray-800 border-2 text-sm mb-[2px] py-2 px-4 text-x-gray-800 duration-200 lg:text-base hover:text-white hover:bg-x-gray-800"
              >Order now</a>
            </Link>
            <button
              className="ml-6 text-x-gray-300 duration-200 items-center hidden snipcart-checkout sm:flex hover:text-x-gray-800"
            >
              <ShoppingCart24 />
              <span className="font-bold font-title text-sm ml-2 text-x-gray-800">{cartQty}</span>
            </button>
            <div className="ml-6 lg:hidden">
              <Hamburger open={sidebar} toggle={toggleSidebar} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
