import {
	GetLayoutProps,
	PageProps,
	PageWithLayout,
} from '@/components/page-layout'
import Hero from '@www/calendar'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps<IndexProps> = () => ({
	title: 'Calendar',
	padded: false,
})

const Calendar: PageWithLayout = (data: IndexProps) => <Hero />

Calendar.getLayoutProps = getLayoutProps

export default Calendar
