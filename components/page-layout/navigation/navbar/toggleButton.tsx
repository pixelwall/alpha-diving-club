/// <reference lib="dom" />
import type { RefObject } from 'react'
import React, { useRef } from 'react'
import s from './styles/toggle.module.css'

export default function ToggleButton({
	toggle,
	checked,
}: {
	checked: boolean
	toggle: () => void
}) {
	const labelRef: RefObject<HTMLLabelElement> = useRef(null)
	return (
		<label
			// aria-label='Menu'
			// title='Menu'
			className={`my-auto ml-1 ${s.switch}`}
			//   className={`${s.hamburguer} ${open ? 'open' : ''}`}
			onClick={toggle}
			ref={labelRef}
		>
			<input type='checkbox' />
			<span className={`${s.slider} ${s.round}`}></span>
		</label>
	)
}
