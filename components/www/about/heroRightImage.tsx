import Image from 'next/image'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'

const HeroRightImage = ({ props }) => (
	<div className='flex min-h-screen pt-16 mb-20 c'>
		<div className='flex flex-wrap-reverse my-auto w-full items-center sm:flex-wrap'>
			<div className='w-full sm:w-1/2'>
				<Viewport
					className='pr-2 animate text-4xl xl:text-6xl'
					style={setAnim({ x: '-1rem', d: '800ms' })}
				>
					<div>
						<h1 className='dark:text-white font-bold text-3xl xl:text-5xl xl:leading-tight'>
							{props.title.toUpperCase()}
						</h1>
						<p className='my-5 text-xl leading-normal'>{props.body}</p>
					</div>
				</Viewport>
			</div>
			<Viewport
				className='flex mb-16 w-full animate justify-center lg:justify-end relative sm:w-1/2 lg:mb-0'
				style={setAnim({ x: '1rem', y: '1rem', d: '200ms' })}
			>
				{/* <div
					className='h-full animate w-7/10 -z-10 absolute lg:h-80 lg:w-80'
					style={setAnim({ x: '-1.25rem', y: '-1.25rem', d: '0.2s' })}
				>
					<div className='h-full rounded-[50%] w-full transform translate-x-5 translate-y-5 polka' />
				</div> */}
				{/* <div className='flex bg-blue-300 bg-opacity-50 rounded-[50%] w-7/10 items-center justify-center lg:h-80 lg:w-80'> */}
				{/* <Parallax negative className='p-4'> */}
				<Image
					src={`/images/${props.image}`}
					alt=''
					width={481}
					height={481}
					objectFit='contain'
					layout='intrinsic'
				/>
				{/* </Parallax> */}
				{/* </div> */}
			</Viewport>
		</div>
	</div>
)

export default HeroRightImage
