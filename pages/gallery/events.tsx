import {
	GetLayoutProps,
	PageProps,
	PageWithLayout,
} from '@/components/page-layout'
import Hero from '@www/gallery/events'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps<IndexProps> = () => ({
	title: 'Gallery',
	padded: false,
})

const About: PageWithLayout = (data: IndexProps) => <Hero />

About.getLayoutProps = getLayoutProps

export default About
