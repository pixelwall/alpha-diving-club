import { GetLayoutProps, PageProps } from '@/components/page-layout'
import CalendarContainer from './calendarContainer'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Calendar',
	padded: false,
})

const Index = (data: IndexProps) => (
	<>
		<CalendarContainer/>
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
