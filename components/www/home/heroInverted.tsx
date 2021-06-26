import Image from 'next/image'
import Link from 'next/link'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'

const HeroInverted = () => (
	<div className='relative'>
		<div className='flex min-h-screen pt-20 xl:pt-0 c'>
			<div className='flex flex-wrap-reverse my-auto w-full items-center sm:flex-wrap'>
				<Viewport
					className='flex mb-16 w-full animate justify-center lg:justify-end relative sm:w-1/2 lg:mb-0'
					style={setAnim({ x: '1rem', y: '1rem', d: '200ms' })}
				>
					<div
						className='h-full animate w-7/10 -z-10 absolute lg:h-80 lg:w-80'
						style={setAnim({ x: '-1.25rem', y: '-1.25rem', d: '0.2s' })}
					>
						<div className='h-full rounded-[50%] w-full transform translate-x-5 translate-y-5 polka' />
					</div>
					<div className='flex bg-blue-300 bg-opacity-50 rounded-[50%] w-7/10 items-center justify-center lg:h-80 lg:w-80'>
						<Parallax negative className='p-4'>
							<Image
								src='/images/arepa.png'
								alt=''
								width={481}
								height={481}
								objectFit='contain'
								layout='intrinsic'
							/>
						</Parallax>
					</div>
				</Viewport>
				<div className='w-full sm:w-1/2'>
					<Viewport
						className='pr-2 animate text-right text-4xl xl:text-6xl'
						style={setAnim({ x: '-1rem', d: '800ms' })}
					>
						<div className=''>
							<h1 className='font-bold text-3xl xl:text-5xl xl:leading-tight'>
								WORK HARD FOR YOUR RESULTS
							</h1>
							<p className='my-5 text-xl leading-normal'>
								We have been building springboard and platform divers from the
								ground up, and we have realized that the best way to get to
								achieve your goals is to do it with passion and hard work.
								Whether we are in Venezuela or in Seattle, Washington our goal
								is to bring our athletes to the best of their abilities.
							</p>
							<p className='pl-8 my-5 text-lg leading-normal'>
								Once you've done your tryout, click at the button below to
								enroll in our program.
							</p>
							<Link href='/menu'>
								<a className='bg-blue-400 rounded-full font-medium font-title text-sm mb-[2px] py-4 px-8 text-white duration-200 lg:text-base hover:bg-red-400'>
									SIGN UP
								</a>
							</Link>
						</div>
					</Viewport>
				</div>
			</div>
		</div>
	</div>
)

export default HeroInverted
