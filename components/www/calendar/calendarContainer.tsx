import Viewport, { setAnim } from '@/components/viewport'
import styles from './styles/calendar.module.css'

const CalendarContainer = () => (
	<Viewport
		className='mx-auto animate text-center text-4xl xl:text-6xl'
		style={setAnim({ x: '-1rem', d: '800ms' })}
	>
		<iframe
			src='https://calendar.google.com/calendar/embed?src=alphadivingclub%40gmail.com&ctz=America%2FLos_Angeles'
			className={`${styles['calendar']} locale-en`}
			// style='border: 0'
			width='900'
			height='600'
			// frameborder='0'
			scrolling='no'
		></iframe>
	</Viewport>
)

export default CalendarContainer
