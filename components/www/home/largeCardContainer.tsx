import Image from 'next/image'
import Link from 'next/link'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'
import LargeCard from './largeCard'

const LargeCards = () => {
	const cardInfo = [
		{
			image: 'school.jpg',
			name: 'School',
			description:
				'This is the entry level of all of our divers, where they learn the fundamentals and get ready to invitational competitions and High School diving. We have 3 sub-divisions on this path.',
		},
		{
			image: 'olimpics.jpg',
			name: 'Junior Olimpics',
			description:
				'This is our competitive Team. This group is dedicated to represent our Team in Regional, Zones, Nationals and beyond. Ask for specific information about the price. This group has up to fourteen hours of practice per week.',
		},
	]

	return (
		<>
			{cardInfo.map((info, index) => (
				<LargeCard key={index} props={info} />
			))}
		</>
	)
}

const LargeCardContainer = () => (
	<div className='flex flex-wrap content-between lg:mb-16 mx-16 lg:mx-28'>
		<LargeCards />
	</div>
)

export default LargeCardContainer
