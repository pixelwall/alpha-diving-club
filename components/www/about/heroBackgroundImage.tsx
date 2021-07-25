import Viewport, { setAnim } from '@/components/viewport'
import styles from './styles/backgroundImage.module.css'

const HeroBackgroundImage = () => (
	<div
		className={`${styles['wallpaper']} flex mb-4 w-full px-0 pt-8 lg:pt-20 xl:pt-0 c`}
	>
		<Viewport
			className='text-white mt-32 md:my-auto sm:w-5/12 flex flex-col mx-8 md:ml-28 lg:mr-32 animate'
			style={setAnim({ x: '-1rem', d: '800ms' })}
		>
			<h1 className='font-medium text-3xl xl:text-5xl xl:leading-tight'>
				WE BUILD DIVERS
			</h1>
			<p className='my-2 text-xl leading-normal'>
				Alpha Diving Club's main goal is to help our divers become successful in
				diving and in life.
			</p>
		</Viewport>
	</div>
)

export default HeroBackgroundImage
