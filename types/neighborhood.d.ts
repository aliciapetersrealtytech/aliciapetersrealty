declare interface INeighborhood {
    id: number
    documentId: string
    headline: string
    slug: string
    description: {
        text: string
    }[]
    title: string
    image: {
        id: number
        documentId: string
        name: string
        url: string
        width: number
        height: number
        formats: Record<string, any>
        ext: string
        mime: string
        size: number
    }
}