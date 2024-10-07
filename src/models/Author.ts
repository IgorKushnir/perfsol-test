import { RelatedBlogPost } from './Blog'
import { ImageType } from './Image'
import { Seo } from './Seo'

export type Author = {
    description: string
    facebook?: string
    id: number
    image: ImageType
    linkedin?: string
    name: string
    position: string
    createdAt: string
    updatedAt: string
    blogs?: RelatedBlogPost[]
    slug: string
    seo: Seo
}
