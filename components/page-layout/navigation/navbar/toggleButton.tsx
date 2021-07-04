/// <reference lib="dom" />
import type { RefObject } from 'react'
import React, { useRef, useState, useEffect } from 'react'
import s from './styles/toggle.module.css'
import { useGlobalDataContext } from '@/components/page-layout'

// const [checked, setChecked] = useState(false)
// const toggleChecked = () => setChecked(!checked)

function toggleDarkMode(evt) {
	// toggleChecked()
	const htmlClassList = document.documentElement.classList

	if (evt.target.checked) {
		htmlClassList.add('dark')
	} else {
		htmlClassList.remove('dark')
	}

	// darkMode
	// ? document.documentElement.classList.add('dark')
	// : document.documentElement.classList.remove('dark')
}

export default function ToggleButton() {
	// const [darkMode, setDarkMode] = useState(false)

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
			// ref={labelRef}
		>
			<input type='checkbox' onClick={toggleDarkMode} />
			<span className={`${s.slider} ${s.round}`}></span>
		</label>
	)
}

// export default ToggleButton
