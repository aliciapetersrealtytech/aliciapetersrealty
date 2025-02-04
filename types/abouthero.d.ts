interface AboutHeroComponent {
    __component: "components.about-hero"
    id: number
    headline: string
    heroImage: HeroImage
}

interface HeroImage {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: ImageFormats
    hash: string
    ext: string
    mime: string
    size: number // Size in KB
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: unknown | null
    createdAt: string // ISO timestamp
    updatedAt: string // ISO timestamp
    publishedAt: string // ISO timestamp
}