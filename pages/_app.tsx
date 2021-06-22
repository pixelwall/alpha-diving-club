import '@/styles/app.css'
import '@/styles/icons.css'

import { useMemo } from 'react'
import PageLayout from '@/components/page-layout'

import type { AppProps } from 'next/app'
import type { GetLayoutProps, PageWithLayout } from '@/components/page-layout'

type Props = AppProps & {
  Component: PageWithLayout
}

const App = ({ Component, pageProps }: Props) => {
  const layoutProps = useMemo<GetLayoutProps>(() => Component.getLayoutProps
    ? Component.getLayoutProps(pageProps)
    : pageProps,
    [Component.getLayoutProps, pageProps])

  return (
    <PageLayout brandTitle="Alpha Diving Club" {...pageProps} {...layoutProps}>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default App
