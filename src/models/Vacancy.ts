import { Tag } from './Tags'

export type Vacancy = {
    id: number
    slug: string
    title: string
    MetaDescription: string
    description: string
    tags: Tag[]
    date?: string //deprecated, added for compatibility todo remove
}
