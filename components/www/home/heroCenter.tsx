import Image from 'next/image'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'

const HeroCenter = () => (
	<div className='relative'>
		<div className='flex items-center pt-20 xl:pt-0 c'>
			<div className='flex flex-wrap-reverse w-full items-center sm:flex-wrap'>
				{/* <div className='w-full sm:w-1/2'> */}
				<Viewport
					className='mx-auto w-2/4 pr-2 animate text-center text-4xl xl:text-6xl'
					style={setAnim({ x: '-1rem', d: '800ms' })}
				>
					<div className=''>
						<p className='text-red-500 leading-normal text-2xl'>Our Lessons</p>
						<h1 className='font-bold text-3xl xl:text-5xl xl:leading-tight'>
							Lessons Groups
						</h1>
						<p className='my-5 text-xl leading-normal'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut
							voluptas totam rerum. Quaerat alias labore, odio deserunt nemo
							ipsum error, nam dolores quae saepe quas deleniti, modi facere?
							Ad?
						</p>
					</div>
				</Viewport>
				{/* </div> */}
			</div>
		</div>
	</div>
)

export default HeroCenter
