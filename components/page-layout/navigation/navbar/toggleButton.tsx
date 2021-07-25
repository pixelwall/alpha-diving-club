/// <reference lib="dom" />
import type { RefObject } from 'react'
import React, { useRef, useState, useEffect } from 'react'
import s from './styles/toggle.module.css'
import { useGlobalDataContext } from '@/components/page-layout'

// function toggleDarkMode(evt) {
// 	// toggleChecked()
// 	const htmlClassList = document.documentElement.classList

// 	if (evt.target.checked) {
// 		htmlClassList.add('dark')
// 	} else {
// 		htmlClassList.remove('dark')
// 	}

// darkMode
// ? document.documentElement.classList.add('dark')
// : document.documentElement.classList.remove('dark')

export default function ToggleButton() {
	// const [darkMode, setDarkMode] = useState(false)
	const [checked, setChecked] = useState(Boolean)
	const toggleChecked = (evt) => {
		// toggleChecked()
		const htmlClassList = document.documentElement.classList

		if (evt.target.checked) {
			htmlClassList.add('dark')
			setChecked(true)
		} else {
			htmlClassList.remove('dark')
			setChecked(false)
		}
	}
	// useEffect(() => {
	// 	console.log('before: ' + darkMode)
	// 	darkMode
	// 		? document.documentElement.classList.add('dark')
	// 		: document.documentElement.classList.remove('dark')

	// 	console.log('after: ' + darkMode)
	// }, [darkMode])

	return (
		<label
			// className={`my-auto ml-1 ${s.switch} ${darkMode ? 'checked' : ''}`}
			className={`my-auto ml-1 ${s.switch}`}
		>
			<input type='checkbox' checked={checked} onClick={toggleChecked} />
			<span className={`${s.slider} ${s.round}`}></span>
		</label>
		// <span onClick={toggleDarkMode}>Dark mode</span>
	)
}
