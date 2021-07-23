import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Image from 'next/image'
import HeroBackgroundImage from './heroBackgroundImage'
import HeroLeftImage from './heroLeftImage'
import HeroRightImage from './heroRightImage'
import HeroCenter from './heroCenter'
import QuoteImageTop from './quoteImageTop'
import QuoteImageBottom from './quoteImageBottom'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Home',
	padded: false,
})

const heroInfo = [
	{
		image: 'splashCustom.png',
		title: 'Embracing challenge in a safety manner',
		body: `In over 20 years of experience, we have learn from all over the
        world different techniques that provide a solid and SAFE way to
        learn our beutiful sport. Our method of training covers
        fundamentals, technique, mindset and conditioning of the
        athletes, including life skills.`,
		extra: 'Preparing the athletes... For life!',
	},
	{
		image: '',
		title: 'Our Story',
		body: `We've loved every minute of our journey.`,
		extra: 'About Us',
	},
	{
		image: 'ilichCustom.png',
		title: 'Ilich Marcano',
		body: `Coah Ilich Marcano is one of Venezuela's to exports in Aquatics and had become one of the top coaches in the world. With a 2012, 2016 Olympian under his belt, he has his eyes set on developing another champion from Seattle. As a coach for the past 19 years, his impressive record includes producing a number of International medals: 5th place at the 2010 Youth Olympic Games. He also qualified athletes to the 2012 and 2016 Olympic Games. His experience of building a beginning divers up to an Olympic athlete is his greatest skill set including building a championship mindset and positive attitude.`,
		extra: '',
	},
	{
		image: 'aleeCustom.png',
		title: 'Alejandra Fuentes',
		body: `Coach Alejandra Fuentes is an Olympic Diver, and attained the 5th Place at Montreal 2005 World Championships. She is considered one of the foremost Aquatic coaches in our home country, Venezuela. "Alee", as we like to call her, and her husband, Ilich Marcano, emigrated to Seattle from their home country with their 2 children, Daniel and Andrea, and are bringing their years of experience in teaching young champions to the Alpha Diving Club's program.`,
		extra: ''
	}
]

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

const Index = (data: IndexProps) => (
	<>
		<HeroBackgroundImage />
		<HeroLeftImage props={heroInfo[0]} />
		<HeroCenter props={heroInfo[1]} />
		<div className="flex mx-12">
			<QuoteImageTop props={quoteInfo[0]}/>
			<Image
					src={'/images/blueline.png'}
					alt=''
					width={111}
					height={481}
					objectFit='contain'
					layout='intrinsic'
				/>
			<QuoteImageBottom props={quoteInfo[1]} />
		</div>
		<HeroLeftImage props={heroInfo[2]} />
		<HeroRightImage props={heroInfo[3]} />
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
