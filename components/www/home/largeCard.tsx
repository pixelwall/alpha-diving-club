import Image from 'next/image'
import Link from 'next/link'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'

const LargeCard = ({ props }) => (
	<div className='w-60 shadow-md mx-auto my-8 lg:my-12'>
		{/* <Viewport
			className='flex flex-col mr-0 mb-16 w-full animate justify-center lg:justify-end relative sm:w-1/2 lg:mb-0'
			style={setAnim({ x: '1rem', y: '1rem', d: '200ms' })}
		> */}
		<Image
			src={`/images/${props.image}`}
			alt=''
			width={300}
			height={180}
			objectFit='contain'
			layout='intrinsic'
		/>
		<div className='mx-4 mt-6 mb-4'>
			<h2 className='text-2xl font-extrabold'>{props.name}</h2>
			<p className='text-red-500'>{props.description}</p>
		</div>
		{/* </Viewport> */}
	</div>
)

export default LargeCard
