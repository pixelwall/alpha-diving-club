import { GetLayoutProps, PageProps, PageWithLayout } from '@/components/page-layout'
import Hero from '@www/home'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps<IndexProps> = () => ({
  title: 'Home',
  padded: false,
})

const Home: PageWithLayout = (data: IndexProps) => (
  <Hero />
)

Home.getLayoutProps = getLayoutProps

export default Home
