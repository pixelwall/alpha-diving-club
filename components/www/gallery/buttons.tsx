import Viewport, { setAnim } from '@/components/viewport'
import Link from 'next/link'

const Buttons = () => (
	<Viewport
		className='animate flex relative my-6 tracking-widest'
		style={setAnim({ x: '-1rem', d: '800ms' })}
	>
		<div className='hover:bg-gray-200 duration-200 cursor-pointer rounded-full shadow py-3 px-6 mx-4'>
			<Link href='/gallery'>
				<p className='inline text-xl'>Photos</p>
			</Link>
		</div>
		<div className='hover:bg-gray-200 duration-200 cursor-pointer rounded-full shadow py-3 px-6 mx-4'>
			<Link href='/gallery/videos'>
				<p className='inline text-xl'>Videos</p>
			</Link>
		</div>
		<div className='hover:bg-gray-200 duration-200 cursor-pointer rounded-full shadow py-3 px-6 mx-4'>
			<Link href='/gallery/years'>
				<p className='inline text-xl'>Years</p>
			</Link>
		</div>
		<div className='hover:bg-gray-200 duration-200 cursor-pointer rounded-full shadow py-3 px-6 mx-4'>
			<Link href='/gallery/events'>
				<p className='inline text-xl'>Events</p>
			</Link>
		</div>
	</Viewport>
)

export default Buttons
