import { ImageType } from './Image'

export type Seo = {
    description: string
    id: number
    image: ImageType
    title: string,
    canonical?: string
}
