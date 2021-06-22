import type { GetLayoutProps, PageProps, PageWithLayout } from '@/components/page-layout'

const getLayoutProps: GetLayoutProps = () => ({
  title: '500: We have a problem',
})

const Page500: PageWithLayout = (props: PageProps) => (
  <div className="text-center w-full py-16">
    <h1 className="font-bold font-title mb-4 text-8xl">
      <span className="text-yellow-300">5</span>
      <span className="text-blue-300">0</span>
      <span className="text-red-300">0</span>
    </h1>
    <p>Oops, we have a problem in the kitchen! Try later or contact the programmer</p>
  </div>
)

Page500.getLayoutProps = getLayoutProps

export default Page500
