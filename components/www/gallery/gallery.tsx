import Image from 'next/image'
import Viewport, { setAnim } from '@/components/viewport'
import styles from './styles/gallery.module.css'

const Gallery = ({ props }) => (
	<Viewport
		className='animate my-12 mx-auto px-8 container'
		style={setAnim({ x: '+1rem', d: '800ms' })}
	>
		<Viewport className='animate' style={setAnim({ x: '-1rem', d: '800ms' })}>
			<h4 className='mb-6 text-3xl'>{props.title}</h4>
		</Viewport>
		<div className={`${styles['gallery']} grid gap-7`}>
			{props.pictures.map((p) => (
				<Image
					src={p}
					alt=''
					width={541}
					height={641}
					objectFit='cover'
					layout='intrinsic'
					className='hover:cursor-pointer'
				/>
			))}
		</div>
	</Viewport>
)

export default Gallery
