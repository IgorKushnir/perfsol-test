import { ImageType } from './Image'
import { Section } from './Section'

export type Phase = {
    id: number
    text: string
}

export type Workflow = { image: ImageType; list: Phase[]; title: string; id: number }

export type WorkflowSection = Section<Workflow>
