import { GetLayoutProps, PageProps, PageWithLayout } from '@/components/page-layout'

const getLayoutProps: GetLayoutProps = () => ({
  title: `You're offline`,
})

const Offline: PageWithLayout = (props: PageProps) => (
  <div className="text-center w-full py-16">
    <h1 className="font-bold font-title mb-4 text-5xl">
      <span className="text-yellow-300">You </span>
      <span className="text-blue-300">are </span>
      <span className="text-red-300">offline</span>
    </h1>
    <p>Sorry, you're offline and this resource is not cached, try latter :(</p>
  </div>
)

Offline.getLayoutProps = getLayoutProps

export default Offline
