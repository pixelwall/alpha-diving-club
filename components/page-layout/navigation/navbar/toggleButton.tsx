/// <reference lib="dom" />
import type { RefObject } from 'react'
import React, { useRef, useState, useEffect } from 'react'
import s from './styles/toggle.module.css'

export default function ToggleButton() {
	const [darkMode, setDarkMode] = useState(false)
	const toggleDarkMode = () => setDarkMode(!darkMode)

	useEffect(() => {
		console.log('before: ' + darkMode)
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')

		console.log('after: ' + darkMode)
	}, [darkMode])

	const labelRef: RefObject<HTMLLabelElement> = useRef(null)
	return (
		<label
			// className={`my-auto ml-1 ${s.switch} ${darkMode ? 'checked' : ''}`}
			className={`my-auto ml-1 ${s.switch}`}
			onClick={toggleDarkMode}
			ref={labelRef}
		>
			<input type='checkbox' />
			<span className={`${s.slider} ${s.round}`}></span>
		</label>
	)
}
