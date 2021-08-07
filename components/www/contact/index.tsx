import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Form from './form'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Contact',
	padded: false,
})

const Index = (data: IndexProps) => (
	<>
		<Form />
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
