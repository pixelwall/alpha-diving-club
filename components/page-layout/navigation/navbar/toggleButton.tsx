/// <reference lib="dom" />
import type { RefObject } from 'react'
import React, { useRef, useState } from 'react'
import s from './styles/toggle.module.css'

export default function ToggleButton() {
	const [darkMode, setDarkMode] = useState(false)
	const toggleDarkMode = () => setDarkMode(!darkMode)

	const labelRef: RefObject<HTMLLabelElement> = useRef(null)
	return (
		<label
			// aria-label='Menu'
			// title='Menu'
            // TODO: esa condicion con el checked le va a aplicar la clase checked al label,
            // Juan usa esa lógica para modificar cómo se ve la burger en su caso, pero yo necesito
            // cambiar la apariencia de casi todos los otros elementos en la pág cuando se cumple la
            // condición de que aparezca el checked
			className={`my-auto ml-1 ${s.switch} ${darkMode ? 'checked' : ''}`}
			//   className={`${s.hamburguer} ${open ? 'open' : ''}`}
			onClick={toggleDarkMode}
			ref={labelRef}
		>
			<input type='checkbox' />
			<span className={`${s.slider} ${s.round}`}></span>
		</label>
	)
}
