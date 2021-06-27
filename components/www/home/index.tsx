import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Hero from './hero'
import HeroInverted from './heroInverted'
import HeroCenter from './heroCenter'
import CardContainer from './cardContainer'
import Quote from './quote'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Home',
	padded: false,
})

const Index = (data: IndexProps) => (
	<>
		<Hero />
		<HeroInverted />
		<HeroCenter />
		<CardContainer />
		<Quote />
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
