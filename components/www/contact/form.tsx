import Image from 'next/image'
import Viewport, { setAnim } from '@/components/viewport'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'
// import { useToast } from '../hooks/useToast';

// const toast = useToast();
//   const { register, handleSubmit, errors, reset } = useForm();
//   const router = useRouter();
//   async function onSubmitForm(values) {
//     let config = {
//       method: 'post',
//       url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: values,
//     };

//     try {
//       const response = await axios(config);
//       console.log(response);
//       if (response.status == 200) {
//         reset();
//         toast(
//           'success',
//           'Thank you for contacting us, we will be in touch soon.'
//         );
//       }
//     } catch (err) {}
//   }

const Form = () => (
	<Viewport
		className='animate my-12 mx-auto px-8 container'
		style={setAnim({ x: '+1rem', d: '800ms' })}
	>
		<div className='b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center'>
			<div className='mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow'>
				<form
					// onSubmit={handleSubmit(onSubmitForm)}
					className='grid grid-cols-1 gap-y-6'
				>
					<div>
						<label htmlFor='name' className=''>
							Parent's name
						</label>
						<input
							type='text'
							name='name'
							// ref={register({
							// 	required: {
							// 		value: true,
							// 		message: 'You must enter your name',
							// 	},
							// })}
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
							// ref={register({
							// 	required: {
							// 		value: true,
							// 		message: 'You must enter your email address',
							// 	},
							// 	minLength: {
							// 		value: 8,
							// 		message: 'This is not long enough to be an email',
							// 	},
							// 	maxLength: {
							// 		value: 120,
							// 		message: 'This is too long',
							// 	},
							// 	pattern: {
							// 		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							// 		message: 'This needs to be a valid email address',
							// 	},
							// })}
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
							// ref={register}
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
							// ref={register({
							// 	required: {
							// 		value: true,
							// 		message: 'You must enter your name',
							// 	},
							// })}
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
							// ref={register({
							// 	required: {
							// 		value: true,
							// 		message: 'You must enter your name',
							// 	},
							// })}
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
							// ref={register({
							// 	required: {
							// 		value: true,
							// 		message: 'You need to enter your message',
							// 	},
							// 	maxLength: {
							// 		value: 1000,
							// 		message: "Your message can't be more than 1000 characters",
							// 	},
							// 	minLength: {
							// 		value: 50,
							// 		message: 'Your message must be longer than this!',
							// 	},
							// })}
							className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
							placeholder='Write a message...'
						></textarea>
						<span className='text-red-400 text-sm py-2'>
							{/* {errors?.message?.message} */}
						</span>
					</div>
					<div>
						<button
							type='submit'
							className='inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</Viewport>
)

export default Form
