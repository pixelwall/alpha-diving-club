import { GetLayoutProps, PageWithLayout } from '@/components/page-layout'

const getLayoutProps: GetLayoutProps = () => ({
  title: '404: This page could not be found',
})

const Page404: PageWithLayout = () => (
  <div className="text-center w-full py-16">
    <h1 className="font-bold font-title mb-4 text-8xl">
      <span className="text-yellow-300">4</span>
      <span className="text-blue-300">0</span>
      <span className="text-red-300">4</span>
    </h1>
    <p>This page could not be found</p>
  </div>
)

Page404.getLayoutProps = getLayoutProps

export default Page404
