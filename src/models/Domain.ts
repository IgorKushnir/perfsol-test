import { CaseStudyImage } from './CaseStudy'
import { Section } from './Section'

export type DomainsType = Section<{
    title: string
    description: string
    slug: string
    image: CaseStudyImage
    id: number
}>
