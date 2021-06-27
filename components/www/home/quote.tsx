import Image from 'next/image'
import Link from 'next/link'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'
// import styles from './styles/quote.module.css'

const Quote = () => (
	<div
		className={`${styles['wallpaper']} flex flex-row-reverse my-8 h-96 w-full px-0 pt-20 xl:pt-0 c`}
	>
		{/* <div className='flex my-auto w-full sm:flex-wrap'> */}
		{/* <div className='w-full sm:w-1/2'> */}
		<Viewport
			className='text-white my-auto sm:w-5/12 flex flex-col mr-32 animate text-right text-4xl xl:text-6xl'
			style={setAnim({ x: '-1rem', d: '800ms' })}
		>
			<h1 className='font-extrabold text-3xl xl:text-3xl xl:leading-tight'>
				To Accept Fears And Overcome Them
			</h1>
			<p className='font-semibold my-5 text-xl leading-normal'>
				We are all afraid of something in life, and what makes us courageous is
				to face the fears head on and overcome them.
			</p>
		</Viewport>
		{/* </div> */}
		{/* </div> */}
	</div>
)

export default Quote
