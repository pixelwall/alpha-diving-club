/// <reference lib="dom" />
// import type { RefObject } from 'react'
// import React, { useRef, useState } from 'react'
// import s from './styles/toggle.module.css'

// export default function ToggleButton() {
// 	const [darkMode, setDarkMode] = useState(false)
// 	const toggleDarkMode = () => setDarkMode(!darkMode)

// 	const labelRef: RefObject<HTMLLabelElement> = useRef(null)
// 	return (
// 		<label
// 			className={`my-auto ml-1 ${s.switch} ${darkMode ? 'checked' : ''}`}
// 			onClick={toggleDarkMode}
// 			ref={labelRef}
// 		>
// 			<input type='checkbox' />
// 			<span className={`${s.slider} ${s.round}`}></span>
// 		</label>
// 	)
// }

// FIXME: make togglebutton from sidebar example
import {
	RefObject,
	CSSProperties,
	useState,
	createContext,
	useContext,
} from 'react'
import { useRef, useEffect } from 'react'
import links from '@/lib/navigation'
import Link from 'next/link'
import s from './styles/toggle.module.css'
import { useGlobalDataContext } from '@/components/page-layout'

// interface ChildrenMenu {
// 	title?: string
// 	childrens?: any[]
// }

// type ChildState = [ChildrenMenu, React.Dispatch<ChildrenMenu>]

// const toggleButtonContext = createContext<ChildState>([null, null])
// const useChildState = () => useContext(toggleButtonContext)

// const ParentLink = (link: {
// 	idx: number
// 	title?: string
// 	href?: string
// 	childrens?: any[]
// 	toggle?: () => void
// }) => {
// 	const { idx, title, href, childrens, toggle } = link
// const css: CSSProperties = {
// 	animationDelay: `${(idx - 1) * 200 - 300}ms` as string,
// 	paddingRight: '0.5rem',
// }

// 	const [, setChildMenu] = useChildState()
// 	if (childrens) {
// 		return (
// 			<div className={s.sidebarLink} onClick={() => setChildMenu(link)}>
// 				<p className='cursor-pointer flex text-right items-center' style={css}>
// 					{title}
// 					<span className='cursor-pointer mt-1 ml-2 i jam:chevron-right' />
// 				</p>
// 			</div>
// 		)
// 	} else {
// 		return (
// 			<Link href={href || '/'}>
// 				<a className={s.sidebarLink} onClick={toggle}>
// 					<p style={css}>{title}</p>
// 				</a>
// 			</Link>
// 		)
// 	}
// }

// const Parents = ({ toggle }: { toggle?: () => void }) => {
// 	const data = useGlobalDataContext()
// 	return (
// 		<div className='mb-6' style={{ overflowY: 'auto' }}>
// 			{links(data).map((l, idx) => (
// 				<ParentLink
// 					key={idx}
// 					title={l.titulo}
// 					idx={idx}
// 					href={l.href}
// 					childrens={l.childrens}
// 					toggle={toggle}
// 				/>
// 			))}
// 		</div>
// 	)
// }

// const ChildLink = (link: {
// 	idx: number
// 	title?: string
// 	href?: string
// 	toggle?: () => void
// }) => {
// 	const { idx, title, href, toggle } = link
// 	const css: CSSProperties = {
// 		animationDelay: `${(idx - 1) * 200 - 300}ms` as string,
// 		paddingRight: '0.5rem',
// 	}
// 	return (
// 		<Link href={href || '/'}>
// 			<a className={s.childLink} onClick={toggle}>
// 				<p style={css}>{title}</p>
// 			</a>
// 		</Link>
// 	)
// }

// const Childs = ({ toggle }: { toggle?: () => void }) => {
// 	const [childMenu, setChildMenu] = useChildState()
// 	return (
// 		<>
// 			<button className={s.backButton} onClick={() => setChildMenu(null)}>
// 				<span className='i jam:chevron-left' />
// 				Back
// 			</button>
// 			<p className={s.childTitle}>{childMenu.title}</p>
// 			<div className={s.childMenuWrapper}>
// 				{childMenu.childrens.map((l, idx) => (
// 					<ChildLink
// 						{...l}
// 						title={l.titulo}
// 						idx={idx}
// 						key={idx}
// 						toggle={toggle}
// 					/>
// 				))}
// 			</div>
// 		</>
// 	)
// }

// const Wrapper = (props: { toggle?: () => void }) => {
// 	const [childMenu] = useChildState()

// const css: CSSProperties = {
// 	animationDelay: `${(idx - 1) * 200 - 300}ms` as string,
// 	paddingRight: '0.5rem',
// }

// 	return (
// 		<div className={s.sidebarWrapper}>
// 			<div className='mt-6'>
// 				<ToggleButton />
// 			</div>
// 			{childMenu ? <Childs {...props} /> : <Parents {...props} />}
// 		</div>
// 	)
// }

export interface ToggleButtonProps {
	checked: boolean
	toggle: () => void
}

const ToggleButton = ({ checked = false, toggle }: ToggleButtonProps) => {
	const toggleButtonRef: RefObject<HTMLLabelElement> = useRef(null)
	// const toggleButtonState: ChildState = useState(null)
	// const [, setToggleButtonState] = useState(false)

	useEffect(() => {
		if (checked) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [checked])

	// useEffect(() => {
	// 	if (!checked) {
	// 		setToggleButtonState(null)
	// 	}
	// }, [checked])

	return (
		// <toggleButtonContext.Provider value={toggleButtonState}>
		<label
			className={`my-auto ml-1 ${s.switch} ${checked ? 'checked' : ''}`}
			ref={toggleButtonRef}
			onClick={toggle}
			// style={{ opacity: `${checked ? '1' : '0'}` }}
		>
			<input type='checkbox' />
			<span className={`${s.slider} ${s.round}`}></span>
			{/* <Wrapper toggle={toggle} /> */}
		</label>
		// </toggleButtonContext.Provider>
	)
	// return (
	// 	<label
	// 		className={`my-auto ml-1 ${s.switch} ${darkMode ? 'checked' : ''}`}
	// 		onClick={toggleDarkMode}
	// 		ref={labelRef}
	// 	>
	// <input type='checkbox' />
	// <span className={`${s.slider} ${s.round}`}></span>
	// 	</label>
	// )
}

export default ToggleButton
