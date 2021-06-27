import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Hero from './hero'
import HeroInverted from './heroInverted'
import HeroCenter from './heroCenter'
import CardContainer from './cardContainer'
import Quote from './quote'
import LargeCardContainer from './largeCardContainer'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Home',
	padded: false,
})

const heroCenterInfo = [
	{
		header: 'Our Lessons',
		title: 'Lessons Groups',
		body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti eveniet fugit ipsa! Quos, nemo?',
	},
	{
		header: 'Sub-Levels',
		title: 'Levels In Our Program',
		body: 'At Alpha Diving Club we are all about finding the right level for our divers. We currently have two main paths: School and Junior Olympics.',
	},
]

const Index = (data: IndexProps) => (
	<>
		<Hero />
		<HeroInverted />
		<HeroCenter props={heroCenterInfo[0]} />
		<CardContainer />
		<Quote />
		<HeroCenter props={heroCenterInfo[1]} />
		<LargeCardContainer />
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index