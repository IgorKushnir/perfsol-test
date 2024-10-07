import { Section } from './Section'
import { Tag } from './Tags'

export type DeveloperItem = { id: number; name: string; position: string; description: string; tags: Tag[]; cv: string }

export type Developers = Section<DeveloperItem>
