import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Banner from './banner'
import Presentation from './presentation'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Gallery',
	padded: false,
})


const Index = (data: IndexProps) => (
    <>
		<Banner/>
		<Presentation/>
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index