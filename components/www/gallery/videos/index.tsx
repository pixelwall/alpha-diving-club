import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Banner from '../banner'
import Presentation from '../presentation'
import Gallery from '../gallery'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Gallery',
	padded: false,
})

const galleries = [{
	title: '',
	pictures: []
}]

const Index = (data: IndexProps) => (
	<>
		<Banner />
		<Presentation />
		{galleries.map((g) => (
			<Gallery props={g} />
		))}
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
