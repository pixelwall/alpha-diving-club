import Image from 'next/image'
import Viewport, { setAnim } from '@/components/viewport'
import Link from 'next/link'
import styles from './styles/form.module.css'

const Form = () => (
	// <Viewport
	// 	className='animate my-12 mx-auto container'
	// 	style={setAnim({ x: '+1rem', d: '800ms' })}
	// >
	<div className='bg-gray-50 flex justify-center items-center rounded-xl mx-16 mb-16'>
		<div className={`shadow w-6/12 ${styles['form']}`}>
			<h2 className='text-4xl my-8 text-center font-medium'>CONTACT US</h2>
			<div>
				<form className='grid grid-cols-1 gap-y-6'>
					<div>
						<label htmlFor='name' className=''>
							Parent's name
						</label>
						<input
							type='text'
							name='name'
							className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
							placeholder='Ex: Nicole Lopez'
						/>
						<span className='text-red-400 text-sm py-2'></span>
					</div>
					<div>
						<label htmlFor='email' className=''>
							Email
						</label>
						<input
							name='email'
							type='text'
							className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
							placeholder='sample@gmail.com'
						/>
						<span className='text-red-400 text-sm py-2'></span>
					</div>
					<div>
						<label htmlFor='phone' className=''>
							Phone
						</label>
						<input
							type='text'
							name='phone'
							className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2'
							placeholder='(xxx) xxx-xxxx'
						/>
					</div>
					<div>
						<label htmlFor='name' className=''>
							Diver's name
						</label>
						<input
							type='text'
							name='name'
							className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
							placeholder='Ex: Daniel Marcano'
						/>
						<span className='text-red-400 text-sm py-2'></span>
					</div>
					<div>
						<label htmlFor='name' className=''>
							Diver's age
						</label>
						<input
							type='text'
							name='name'
							className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
							placeholder='Ex: 16'
						/>
						<span className='text-red-400 text-sm py-2'></span>
					</div>
					<div>
						<label htmlFor='message' className=''>
							Message
						</label>
						<textarea
							name='message'
							rows={4}
							className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
							placeholder='Write a message...'
						></textarea>
						<span className='text-red-400 text-sm py-2'></span>
					</div>
					<div className='mx-auto'>
						{/* <button
							type='submit'
							className='inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
						>
							Submit
						</button> */}
						<Link href='/menu'>
							<a className='bg-red-500 rounded-full font-bold font-title text-sm inline-flex justify-center py-3 px-8 text-white duration-200 lg:text-base hover:bg-red-400'>
								SEND
							</a>
						</Link>
					</div>
				</form>
			</div>
		</div>
		{/* <div className={`w-6/12 mx-auto shadow ${styles['image']}`}>
			<p
				className={`h-full my-auto text-2xl font-extrabold mx-12 px-8 ${styles['quote']}`}
			>
				At Alpha Diving Club, we're all about embracing challenge and having
				fun. Out experienced coaches train our divers to reach their highest
				potential and to always have a great time, whether it be at practice or
				at competition. We are new to the United States; however, we have been
				coaching in our native Venezuela, since 1999, and our previous
				competitors have achieved excellent results nationally and
				internationally.
			</p>
		</div> */}
		<div className={`shadow w-6/12 ${styles['image']}`}>
			<h4 className={`${styles['quote']}`}>
				At Alpha Diving Club, we're all about embracing challenge and having
				fun. Out experienced coaches train our divers to reach their highest
				potential and to always have a great time, whether it be at practice or
				at competition. We are new to the United States; however, we have been
				coaching in our native Venezuela, since 1999, and our previous
				competitors have achieved excellent results nationally and
				internationally.
			</h4>
		</div>
	</div>
	// </Viewport>
)

export default Form
