import {
	GetLayoutProps,
	PageProps,
	PageWithLayout,
} from '@/components/page-layout'
import Hero from '@www/contact'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps<IndexProps> = () => ({
	title: 'Contact',
	padded: false,
})

const Contact: PageWithLayout = (data: IndexProps) => <Hero />

Contact.getLayoutProps = getLayoutProps

export default Contact
