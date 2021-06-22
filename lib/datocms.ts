import { GraphQLClient } from 'graphql-request'

export async function request({ query, variables, preview }: {
  query: string
  variables?: any
  preview?: boolean
}): Promise<any> {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`

    const client = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
      },
    })

    return process.env.OFFLINE ? {} : client.request(query, variables)
}

export const responsiveImageHelper = (params?: {
  w?: number
  h?: number
  q?: number
  fit?: string
}) => {
  const { w, h, q, fit } = params || {
    w: null,
    h: null,
    q: null,
    fit: null,
  }
  return `responsiveImage(imgixParams: {
    ${w ? `w: ${w},` : ''}
    ${h ? `h: ${h},` : ''}
    ${q ? `q: ${q},` : ''}
    ${fit ? `fit: ${fit},` : ''}
    auto: format
  }) {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }`
}

export const responsiveImageFragment = `
fragment responsiveImageFragment on ResponsiveImage {
  srcSet
  webpSrcSet
  sizes
  src
  width
  height
  aspectRatio
  alt
  title
  base64
}
`

const GLOBAL_DATA_QUERY = `
query GlobalDataQuery {
  globalInfo {
    footerDescription
    direction
  }
  contactInfo {
    facebook
    instagram
    phone
  }
  menuCategories: allMenuCategories {
    name
    slug
    description
    public
    image {
      ${responsiveImageHelper({ w: 500, h: 500, fit: 'crop' })}
    }
  }
}
`

export async function getGlobalData({ preview = false }: { preview?: boolean } = {}): Promise<any> {
  const req = await request({ query: GLOBAL_DATA_QUERY, preview })
  return {
    ...req
  }
}
