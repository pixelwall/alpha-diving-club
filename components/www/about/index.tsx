import { GetLayoutProps, PageProps } from '@/components/page-layout'
import HeroBackgroundImage from './heroBackgroundImage'
import HeroLeftImage from './heroLeftImage'
import HeroRightImage from './heroRightImage'
import HeroCenter from './heroCenter'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Home',
	padded: false,
})

const heroLeftInfo = [
	{
		image: 'splashCustom.png',
		header: 'Embracing challenge in a safety manner',
		body: `In over 20 years of experience, we have learn from all over the
        world different techniques that provide a solid and SAFE way to
        learn our beutiful sport. Our method of training covers
        fundamentals, technique, mindset and conditioning of the
        athletes, including life skills.`,
		footer: 'Preparing the athletes... For life!',
	},
	{
		image: '',
		header: 'Venezuela',
		body: `Our story started in 1999 while living in Venezuela. Alejandra Fuentes was preparing for the 2000 Sydney Olimpic Games and Ilich Marcano was preparing the next generation of champion. Time went by and divers such as Robert Paez and Maria Betancourt became the result of all the hard work placed throughout many years.`,
		footer: '',
	},
	{
		image: 'ilichCustom.png',
		header: 'Ilich Marcano',
		body: `Coah Ilich Marcano is one of Venezuela's to exports in Aquatics and had become one of the top coaches in the world. With a 2012, 2016 Olympian under his belt, he has his eyes set on developing another champion from Seattle. As a coach for the past 19 years, his impressive record includes producing a number of International medals: 5th place at the 2010 Youth Olympic Games. He also qualified athletes to the 2012 and 2016 Olympic Games. His experience of building a beginning divers up to an Olympic athlete is his greatest skill set including building a championship mindset and positive attitude.`,
		footer: '',
	},
]

const heroRightInfo = [
	{
		image: '',
		title: 'Seattle, Washington. USA',
		body: `We arrived in Seattle, Washington on September of 2015 and for the past 3 years we have been building divers from the ground up. Using safe and methodologically planned workouts.
        In 2018, 8 of our divers made the qualification to USA Diving Junior Olympic Nationals.`,
	},
	{
		image: 'aleeCustom.png',
		title: 'Alejandra Fuentes',
		body: `Coach Alejandra Fuentes is an Olympic Diver, and attained the 5th Place at Montreal 2005 World Championships. She is considered one of the foremost Aquatic coaches in our home country, Venezuela. "Alee", as we like to call her, and her husband, Ilich Marcano, emigrated to Seattle from their home country with their 2 children, Daniel and Andrea, and are bringing their years of experience in teaching young champions to the Alpha Diving Club's program.`,
	},
]

const heroCenterInfo = [
	{
		header: 'About Us',
		title: 'Our Story',
		body: `We've loved every minute of our journey.`,
	},
]

const Index = (data: IndexProps) => (
	<>
		<HeroBackgroundImage />
		<HeroLeftImage props={heroLeftInfo[0]} />
		<HeroCenter props={heroCenterInfo[0]} />
		<HeroLeftImage props={heroLeftInfo[1]} />
		<HeroRightImage props={heroRightInfo[0]} />
		<HeroLeftImage props={heroLeftInfo[2]} />
		<HeroRightImage props={heroRightInfo[1]} />
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
