/// <reference lib="dom" />
import {
	RefObject,
	CSSProperties,
	useState,
	createContext,
	useContext,
} from 'react'
import { useRef, useEffect } from 'react'
import s from './styles/toggle.module.css'
import { useGlobalDataContext } from '@/components/page-layout'

export interface ToggleButtonProps {
	checked: boolean
	toggle: () => void
}

const ToggleButton = ({ checked = false, toggle }: ToggleButtonProps) => {
	const toggleButtonRef: RefObject<HTMLLabelElement> = useRef(null)

	useEffect(() => {
		if (checked) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	})

	return (
		<label
			className={`my-auto ml-1 ${s.switch} ${checked ? 'checked' : ''}`}
			ref={toggleButtonRef}
			onClick={toggle}
		>
			<input type='checkbox' />
			<span className={`${s.slider} ${s.round}`}></span>
		</label>
	)
}

export default ToggleButton
