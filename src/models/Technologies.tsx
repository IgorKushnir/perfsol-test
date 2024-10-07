import { CaseStudyImage } from './CaseStudy'
import { Section } from './Section'

export type Technologies = Section<TechnologyItem>

export type TechnologyItem = {
    title: string
    description: string
    image: CaseStudyImage
    slug?: string
    id: number
}
