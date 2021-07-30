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
	title: 'Christmas Practice',
	pictures: [
		'/images/position.jpg',
		'/images/position.jpg',
		'/images/position.jpg',
		'/images/position.jpg',
		'/images/position.jpg',
		'/images/position.jpg',
		'/images/position.jpg',
		'/images/position.jpg',
	]
},
{
	title: 'EWU Exhibition Meet',
	pictures: [
		'/images/groupposition.jpg',
		'/images/groupposition.jpg',
		'/images/groupposition.jpg',
		'/images/groupposition.jpg',
		'/images/groupposition.jpg',
		'/images/groupposition.jpg',
		'/images/groupposition.jpg',
		'/images/groupposition.jpg',
	]
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
