import { ImageType } from './Image'
import {Section} from "./Section";

export type Frameworks = Section<FrameworkItem>

export type FrameworkItem = {
    id: number
    title: string
    description: string
    image: ImageType
}
