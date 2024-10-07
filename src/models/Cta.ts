export type ContentCtaType = {
    title: string
    description: string
}

export type PersonCtaType = ContentCtaType & {
    name: string
    position: string
    avatar: string
}
