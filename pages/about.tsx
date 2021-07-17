import {
	GetLayoutProps,
	PageProps,
	PageWithLayout,
} from '@/components/page-layout'
import Hero from '@www/about'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps<IndexProps> = () => ({
	title: 'About',
	padded: false,
})

const About: PageWithLayout = (data: IndexProps) => <Hero />

About.getLayoutProps = getLayoutProps

export default About
