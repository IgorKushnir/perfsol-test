import { Award } from './Award'
import { Testimonial } from './Testimonial'

export type About = {
    title: string
    description: string
    testimonials: Testimonial[]
    awards: Award[]
}
