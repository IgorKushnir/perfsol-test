export type PaginationItem = {
    name: string
    href: string
}

export type MenuItem = {
    title: string
    items?: MenuItem[]
    path: string
    hasTranslation: boolean
}
