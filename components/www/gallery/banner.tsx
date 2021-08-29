import Viewport, { setAnim } from '@/components/viewport'
import Image from 'next/image'
import styles from './styles/banner.module.css'

const Banner = () => (
		<Viewport
			className='w-full animate'
			style={setAnim({ x: '-1rem', d: '800ms' })}
		>
			{/* <div className={`${styles['banner']}`}></div> */}
			<Image
					src='/images/team.jpg'
					alt=''
					width={841}
					height={681}
					layout='responsive'
					className='absolute'
				/>
		</Viewport>
)

export default Banner
