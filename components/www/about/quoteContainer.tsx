import Image from 'next/image'
import QuoteImageTop from './quoteImageTop'
import QuoteImageBottom from './quoteImageBottom'
import styles from './styles/quote.module.css'

const quoteInfo = [
	{
		image: 'diveCustom.png',
		title: 'Seattle, Washington. USA',
		body: `We arrived in Seattle, Washington on September of 2015 and for the past 3 years we have been building divers from the ground up. Using safe and methodologically planned workouts.
        In 2018, 8 of our divers made the qualification to USA Diving Junior Olympic Nationals.`,
	},
	{
		image: 'rollingCustom.png',
		title: 'Venezuela',
		body: `Our story started in 1999 while living in Venezuela. Alejandra Fuentes was preparing for the 2000 Sydney Olimpic Games and Ilich Marcano was preparing the next generation of champion. Time went by and divers such as Robert Paez and Maria Betancourt became the result of all the hard work placed throughout many years.`,
		footer: '',
	},
]

const QuoteContainer = () => (
	<div className='flex flex-col md:flex-row mx-12'>
		<QuoteImageTop props={quoteInfo[0]} />
		<Image
			src={'/images/blueline.png'}
			alt=''
			width={111}
			height={481}
			// hidden={true}
			// objectFit='contain'
			// className={`${styles['image']}`}
		/>
		<QuoteImageBottom props={quoteInfo[1]} />
	</div>
)

export default QuoteContainer
