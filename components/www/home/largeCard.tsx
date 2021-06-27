import Image from 'next/image'
import Link from 'next/link'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'
import styles from './styles/largeCard.module.css'

const LargeCard = ({ props }) => (
	<div className={`${styles['largeCard']} shadow-md mx-auto my-8 lg:my-12`}>
		{/* <Viewport
			className='flex flex-col mr-0 mb-16 w-full animate justify-center lg:justify-end relative sm:w-1/2 lg:mb-0'
			style={setAnim({ x: '1rem', y: '1rem', d: '200ms' })}
		> */}
		<div className={`${styles['image']}`}>
			<Image
				src={`/images/${props.image}`}
				alt=''
				width={451}
				height={291}
				objectFit='cover'
			/>
		</div>
		<div className='w-full h-full px-4 pt-6 pb-4'>
			<h2 className='mb-2 text-xl font-black'>{props.name}</h2>
			<p className='leading-relaxed text-md'>{props.description}</p>
		</div>
		{/* </Viewport> */}
	</div>
)

export default LargeCard
