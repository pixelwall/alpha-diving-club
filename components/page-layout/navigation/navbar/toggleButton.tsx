/// <reference lib="dom" />
import type { RefObject } from 'react'
import React, { useRef, useState, useEffect } from 'react'
import s from './styles/toggle.module.css'

const osheme = true

function toggleDarkMode(checkbox) {
	const htmlClassList = document.documentElement.classList

	if (checkbox.target.checked) {
		console.log('owo')
	}

	htmlClassList.contains('dark')
		? htmlClassList.remove('dark')
		: htmlClassList.add('dark')
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

	const labelRef: RefObject<HTMLLabelElement> = useRef(null)
	return (
		<label
			// className={`my-auto ml-1 ${s.switch} ${darkMode ? 'checked' : ''}`}
			className={`my-auto ml-1 ${s.switch}`}
			ref={labelRef}
		>
			<input value='true' onClick={toggleDarkMode} />
			<span className={`${s.slider} ${s.round}`}></span>
		</label>
	)
}
