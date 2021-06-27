import Image from 'next/image'
import Link from 'next/link'
import Viewport, { setAnim } from '@/components/viewport'
import Parallax from '@/components/parallax'
import Card from './card'

const Cards = () => {
	const cardInfo = [
		{
			image: 'arepa.png',
			name: 'School I',
			description: '2 hours of practice a week',
			price: '$199',
		},
		{
			image: 'arepita.png',
			name: 'School II',
			description: '4 hours of practice a week',
			price: '$230',
		},
		{
			image: 'logo.png',
			name: 'School III',
			description: '6 hours of practice a week',
			price: '$299',
		},
	]

	return (
		<>
			{cardInfo.map((info, index) => (
				<Card key={index} props={info} />
			))}
		</>
	)
}

const CardContainer = () => (
	<div className='flex flex-wrap content-between mx-16 lg:mx-28'>
		<Cards />
	</div>
)

export default CardContainer
