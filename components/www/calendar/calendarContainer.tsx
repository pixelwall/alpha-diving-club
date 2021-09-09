import Viewport, { setAnim } from '@/components/viewport'
import styles from './styles/calendar.module.css'

const CalendarContainer = () => (
	<div className='mx-12'>
		<Viewport
			className={`${styles['responsive-iframe-container small-container']} mx-auto animate text-center text-4xl xl:text-6xl`}
			style={setAnim({ x: '-1rem', d: '800ms' })}
		>
			<iframe
				src='https://calendar.google.com/calendar/embed?src=alphadivingclub%40gmail.com&ctz=America%2FLos_Angeles'
				className={`${styles['calendar']} locale-en`}
				width='100%'
				height='650'
				frameBorder='0'
				scrolling='no'
			></iframe>
		</Viewport>
	</div>
)

export default CalendarContainer
