import { ImageType } from './Image'

export type Testimonial = {
    createdAt: string
    id: number
    name: string
    publishedAt: string
    testimonial: string
    title: string
    updatedAt: string
    image?: ImageType
    video?: string
}
