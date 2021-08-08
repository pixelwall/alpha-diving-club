import Viewport, { setAnim } from '@/components/viewport'
import styles from './styles/banner.module.css'

const Banner = () => (
		<Viewport
			className='w-full animate'
			style={setAnim({ x: '-1rem', d: '800ms' })}
		>
			<div className={`${styles['banner']}`}></div>
		</Viewport>
)

export default Banner
