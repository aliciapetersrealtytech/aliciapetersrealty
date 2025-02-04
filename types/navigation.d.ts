interface INavigation {
    id: number
    documentId: string
    title: string
    internalLink: boolean
    attachToMenu: boolean
    link: string
    createdAt: string // ISO timestamp
    updatedAt: string // ISO timestamp
    publishedAt: string // ISO timestamp
}