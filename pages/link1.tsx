import type { PageWithLayout } from '@/components/page-layout'

const Page404: PageWithLayout = () => (
  <div className="text-center w-full py-16">
    <h1 className="font-bold font-title mb-4 text-8xl">
      Route example
    </h1>
  </div>
)

Page404.getLayoutProps = () => ({
  title: 'Route example',
})

export default Page404
