import { Section } from './Section'

export type ServiceItem = {
    slug: string
    title: string
    description: string
}

export type Services = Section<ServiceItem>
