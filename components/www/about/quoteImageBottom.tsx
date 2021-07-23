import Image from 'next/image'
import Viewport, { setAnim } from '@/components/viewport'

const QuoteImageBottom = ({ props }) => (
	<div className='flex min-h-screen px-0 pt-16 mb-20 c'>
		<div className='flex flex-col flex-wrap-reverse my-auto w-full items-center sm:flex-wrap'>
			<div className='w-full sm:w-1/2'>
				<Viewport
					className='mb-12 pr-2 animate text-4xl xl:text-6xl'
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
				<Image
					src={`/images/${props.image}`}
					alt=''
					width={481}
					height={481}
					objectFit='contain'
					layout='intrinsic'
				/>
			</Viewport>
		</div>
	</div>
)

export default QuoteImageBottom
