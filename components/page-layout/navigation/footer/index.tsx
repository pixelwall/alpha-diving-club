import Link from 'next/link'
import navs from '@/lib/navigation'
import styles from './footer.module.css'
import { Fragment, useState } from 'react'
import { useGlobalDataContext } from '@/components/page-layout'
import Viewport, { setAnim } from '@/components/viewport'
import Image from 'next/image'
import { LogoFacebook32 } from '@carbon/icons-react'
import { LogoInstagram32 } from '@carbon/icons-react'
import { LogoTwitter32 } from '@carbon/icons-react'

const MadeBy = () => (
	<div className={styles['madeBy']}>
		<p>
			Developed in with ❤️ by <strong>Pixelwall</strong>
		</p>
	</div>
)

const Marketing = () => {
	const { globalInfo, contactInfo } = useGlobalDataContext() || {}

	return (
		<div className={styles['el']}>
			{/* <Image
				src='/images/logo-black.png'
				alt='Home'
				title='Home'
				width={128}
				height={128}
				layout='fixed'
			/> */}
			{/* <div className='mt-6'>
				<div
					className={styles['paragraph']}
					dangerouslySetInnerHTML={{ __html: globalInfo?.footerDescription }}
				/>
			</div> */}
			<div className='text-white flex mt-8 items-center'>
				{/* <p className={styles['title']}>Follow us</p> */}
				{/* <div className='flex -mx-2 pl-4 text-x-gray-300 items-center'> */}
				<a
					href={contactInfo?.instagram}
					className='bg-red-500 rounded p-2 mr-3 duration-200 hover:bg-red-400'
				>
					<LogoInstagram32 />
				</a>
				<a
					href={contactInfo?.facebook}
					className='bg-red-500 rounded p-2 mr-3 duration-200 hover:bg-red-400'
				>
					<LogoFacebook32 />
				</a>
				<a
					href={contactInfo?.instagram}
					className='bg-red-500 rounded p-2 mr-3 duration-200 hover:bg-red-400'
				>
					<LogoTwitter32 />
				</a>
				{/* </div> */}
			</div>
		</div>
	)
}

const IsOpen = () => {
	const schedule = {
		init: 1,
		to: 5,
	}
	const [isOpen, setStatus] = useState(true)
	return (
		<div className='rounded border-2 py-1 px-2 inline-flex items-center content-start'>
			<div
				className={`rounded-[50%] w-[8px] h-[8px] ${
					isOpen ? 'bg-green-500' : 'bg-red-500'
				}`}
			/>
			<div className={`rounded ml-1 inline text-xs font-bold`}>
				{isOpen ? 'Open' : 'Closed'}
			</div>
		</div>
	)
}

const Information = () => {
	const { globalInfo, contactInfo } = useGlobalDataContext() || {}
	const direction = globalInfo?.direction
	const phone = contactInfo?.phone

	return (
		<div className={`text-white ${styles.el}`} style={{ margin: '0' }}>
			<div className={`${styles.information}`}>
				<ul className='text-xl mt-10 mr-20 ml-4'>
					<li className='font-bold mb-2'>Connect</li>
					<li className=''>alphadivingclub@hotmail.com</li>
				</ul>
				<ul className='text-xl mt-10 mr-20 ml-4'>
					<li className='font-bold mb-2'>Visit</li>
					<li className=''>650 sw campus dr, federal way, wa 98023</li>
				</ul>
			</div>
			<div></div>
			{/* <div className={styles['el-alt']}>
				<p className={styles['title']}>Direction</p>
				<p className={styles['paragraph']}>{direction}</p>
			</div>
			<div className={styles['el-alt']}>
				<p className={styles['title']}>Schedule</p>
				<p className={styles['paragraph']}>24/7</p>
				<div className='mt-2'>
					<IsOpen />
				</div>
			</div>
			<div className={styles['el-alt']}>
				<p className={styles['title']}>Phone</p>
				<div className={styles['links']}>
					<a href={`tel:${phone}`}>{phone}</a>
				</div>
			</div> */}
		</div>
	)
}

const Section = ({
	titulo,
	childrens,
}: {
	titulo: string
	childrens?: { titulo: string; href: string }[]
}) => (
	<div className={styles['el']}>
		<p className={styles['title']}>{titulo}</p>
		<div className={styles['links']}>
			{childrens.map((n, i) => (
				<Link href={n.href} key={i}>
					<a>{n.titulo}</a>
				</Link>
			))}
		</div>
	</div>
)

const Isolated = () => {
	const data = useGlobalDataContext()
	const isolated = navs(data).filter((e) => !e.childrens)
	return (
		<>
			{isolated.length > 0 ? (
				<Section titulo='Menu' childrens={isolated as any[]} />
			) : null}
		</>
	)
}

const Childrens = () => {
	const data = useGlobalDataContext()
	const childrens = navs(data).filter((e) => e.childrens)
	return (
		<>
			{childrens.map((n, i) => (
				<Fragment key={i}>
					<Section {...n} />
				</Fragment>
			))}
		</>
	)
}

const Elements = () => (
	<div className={styles['elements']}>
		<Information />
		{/* <Isolated /> */}
		<Marketing />
		<Childrens />
	</div>
)

const Footer = () => (
	<footer className='bg-blue-400 m-0 w-full p pb-2 text-x-white c-lg t-16 lg:pb-4'>
		<Viewport className='animate' oneWay style={setAnim({ y: '0.5rem' })}>
			<Elements />
			<MadeBy />
		</Viewport>
	</footer>
)

export default Footer
