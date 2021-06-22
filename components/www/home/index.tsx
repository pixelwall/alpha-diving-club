import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Hero from './hero'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
  title: 'Home',
  padded: false,
})

const Index = (data: IndexProps) => (
  <>
    <Hero />
  </>
)

Index.getLayoutProps = getLayoutProps

export default Index
