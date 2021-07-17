import Image from 'next/image'
import Viewport, { setAnim } from '@/components/viewport'

const HeroCenter = ({ props }) => (
	<div className='relative'>
		<div className='flex items-center pt-8 lg:pt-20 xl:pt-0 c'>
			<div className='flex flex-wrap-reverse w-full items-center sm:flex-wrap'>
				{/* <div className='w-full sm:w-1/2'> */}
				<Viewport
					className='mx-auto lg:w-2/4 pr-2 animate text-center text-4xl xl:text-6xl'
					style={setAnim({ x: '-1rem', d: '800ms' })}
				>
					<div className=''>
						<p className='text-red-500 leading-normal text-2xl'>
							{props.header}
						</p>
						<h1 className='font-bold text-3xl xl:text-5xl xl:leading-tight'>
							{props.title}
						</h1>
						<p className='my-5 text-xl leading-normal'>{props.body}</p>
					</div>
				</Viewport>
				{/* </div> */}
			</div>
		</div>
	</div>
)

export default HeroCenter
