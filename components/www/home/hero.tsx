import Image from 'next/image'
import Link from 'next/link'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'
import styles from './styles/hero.module.css'

const Hero = () => (
	<div className='flex min-h-screen pt-30 c pr-0'>
		<div className='flex flex-col-reverse md:flex-row flex-wrap-reverse my-auto w-full items-center sm:flex-wrap'>
			<div className='md:pt-40 z-10 w-full sm:w-1/2'>
				<Viewport
					className='pr-2 animate text-4xl xl:text-6xl'
					style={setAnim({ x: '-1rem', d: '800ms' })}
				>
					<div>
						<h1 className='dark:text-white font-bold text-3xl xl:text-5xl xl:leading-tight'>
							GO TO THE NEXT LEVEL WITH ALPHA DIVING CLUB
						</h1>
						<p className='my-5 text-xl leading-normal'>
							At Alpha Diving Club, We're all about embracing challenge and
							having fun in a developing springboard diving program, Providing
							dive lessons for every level.
						</p>
						<Link href='https://app3.jackrabbitclass.com/regv2.asp?id=542238'>
							<a className='bg-red-500 rounded-full font-medium font-title text-sm mb-[2px] py-4 px-8 text-white duration-200 lg:text-base hover:bg-red-400'>
								ENROLL NOW
							</a>
						</Link>
					</div>
				</Viewport>
			</div>
			<Viewport
				className={`${styles['viewport']} md:absolute z-0 flex mb-16 w-full animate justify-center lg:justify-end relative lg:mb-0`}
				style={setAnim({ x: '1rem', y: '1rem', d: '200ms' })}
			>
				<Image
					src='/images/helpCustom.png'
					alt='Practicing an appropiate diving position.'
					width={841}
					height={681}
					layout='intrinsic'
					className={`absolute ${styles['image']}`}
				/>
			</Viewport>
		</div>
	</div>
)

export default Hero
