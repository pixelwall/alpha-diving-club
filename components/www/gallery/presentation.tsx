import Viewport, { setAnim } from '@/components/viewport'
import Buttons from './buttons'

const Presentation = () => (
	<div className='relative my-12'>
		<div className='flex flex-col items-center md:pt-8 lg:pt-20 xl:pt-0 c'>
			<div className='flex flex-wrap-reverse w-full items-center sm:flex-wrap'>
				<Viewport
					className='mx-auto lg:w-2/4 pr-2 animate text-center text-4xl xl:text-6xl'
					style={setAnim({ x: '-1rem', d: '800ms' })}
				>
					<div className=''>
						<p className='text-red-500 leading-normal text-2xl'>Gallery</p>
						<h1 className='font-bold text-3xl xl:text-5xl xl:leading-tight'>
							Our Moments
						</h1>
					</div>
				</Viewport>
			</div>
			<Buttons />
		</div>
	</div>
)

export default Presentation
