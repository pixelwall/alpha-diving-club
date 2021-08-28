import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Location from './location'
import Form from './form'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Contact',
	padded: false,
})

const Index = (data: IndexProps) => (
	<>
		<Location/>
		<Form />
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
