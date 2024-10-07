import { Section } from './Section'

export type AdvantagesType = Section<AdvantageType>

export type AdvantageType = {
    id: number
    title: string
    description: string
}
