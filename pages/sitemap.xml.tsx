import { GetServerSideProps } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

type BuildSitemap = (items: any) => Promise<any>

const pages = ['', '/link1']

const buildSitemap: BuildSitemap = (items) => {
  const hostUrl = process.env.HOST_URL ? `https://${process.env.HOST_URL}` : 'http://localhost:3000'
  const sitemap = new SitemapStream({
    hostname: hostUrl,
  })

  pages.forEach((page) => {
    sitemap.write({
      url: `${hostUrl}${page}`,
      lastmodISO: new Date().toISOString(),
      priority: page === '' ? 1 : 0.7,
    })
  })

  sitemap.end();

  return streamToPromise(sitemap)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context && context.res) {
    const { res } = context

    const sitemap = await buildSitemap({})

    res.setHeader('content-type', 'text/xml')
    res.write(sitemap.toString())
    res.end()
  }

  return {
    props: {},
  }
}

const SitemapPage = () => null

export default SitemapPage
