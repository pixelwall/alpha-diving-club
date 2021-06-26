import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Hero from './hero'
import HeroInverted from './heroInverted'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Home',
	padded: false,
})

const Index = (data: IndexProps) => (
	<>
		<Hero />
		<HeroInverted />
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
