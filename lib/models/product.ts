import { responsiveImageHelper } from '../datocms'
import { ResponsiveImage } from './cms'

export const productBaseFields = `
  title
  slug
  category {
    name
    slug
  }
  price
`

export const productCardFields = `
  ${productBaseFields}
  images {
      ${responsiveImageHelper({ w: 480, h: 300, fit: 'crop' })}
  }
`

export const productDetailedFields = `
  ${productBaseFields}
  description
  ingredients
  thumbnails: images {
    ${responsiveImageHelper({ w: 1200, h: 630, fit: 'crop', q: 60 })}
  }
  images {
      ${responsiveImageHelper({ w: 480, h: 300, fit: 'crop' })}
  }
  imagesHd: images {
      ${responsiveImageHelper()}
  }
`

export interface Product {
  title?: string
  slug?: string
  category?: {
    name?: string
    slug?: string
  }
  thumbnails?: ResponsiveImage[]
  images?: ResponsiveImage[]
  imagesHd?: ResponsiveImage[]
  price: number
  description?: string
  ingredients?: string
}
