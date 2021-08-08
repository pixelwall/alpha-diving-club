import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Form from './form'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Contact',
	padded: false,
})

const Index = (data: IndexProps) => (
	<>
		<h1 className='text-5xl mb-20'>Aca va el mapa</h1>
		<Form />
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
