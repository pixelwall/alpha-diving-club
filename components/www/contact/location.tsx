import Viewport, { setAnim } from '@/components/viewport'
import styles from './styles/location.module.css'

const Location = () => (
	<div>
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.96989468506!2d-122.34551778496139!3d47.29538791741851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905652da23a413%3A0x36367c8e81d9fdd7!2sWeyerhaeuser%20King%20County%20Aquatic%20Center!5e0!3m2!1ses!2sar!4v1630180309667!5m2!1ses!2sar'
			width='800'
			height='600'
			loading='lazy'
			className={`${styles['map']}`}
		></iframe>
	</div>

	// <Viewport
	// 	className='animate my-12 mx-auto container'
	// 	style={setAnim({ x: '+1rem', d: '800ms' })}
	// >
	// </Viewport>
)

export default Location
