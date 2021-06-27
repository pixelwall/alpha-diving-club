import Image from 'next/image'
import Link from 'next/link'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'

const Card = ({ props }) => (
	<div className='shadow-md mx-auto my-8 lg:my-12'>
		{/* <Viewport
			className='flex flex-col mr-0 mb-16 w-full animate justify-center lg:justify-end relative sm:w-1/2 lg:mb-0'
			style={setAnim({ x: '1rem', y: '1rem', d: '200ms' })}
		> */}
		<Image
			src='/images/arepa.png'
			alt=''
			width={300}
			height={180}
			objectFit='contain'
			layout='intrinsic'
		/>
		<div className='mx-4 mt-6 mb-4'>
			<h2 className='text-2xl font-extrabold'>{props.name}</h2>
			<p>{props.description}</p>
			<h2 className='text-2xl font-extrabold text-right'>{props.price}</h2>
		</div>
		{/* </Viewport> */}
	</div>
)

export default Card
