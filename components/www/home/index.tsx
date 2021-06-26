import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Hero from './hero'
import HeroInverted from './heroInverted'
import HeroCenter from './heroCenter'

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
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
