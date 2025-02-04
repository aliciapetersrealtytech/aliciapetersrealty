// interface HeroCarousel {
//     __component: "components.hero-carousel"
//     id: number
//     subheadling: string
//     headline: string
//     heroLink: {
//         id: number
//         buttonLabel: string
//         isExternal: boolean
//         type: string
//         buttonLink: string
//     }
//     heroImages: HeroImage[]
// }

// interface HeroImage {
//     id: number
//     documentId: string
//     name: string
//     alternativeText: string | null
//     caption: string | null
//     width: number
//     height: number
//     formats: ImageFormats
//     hash: string
//     ext: string
//     mime: string
//     size: number
//     url: string
//     previewUrl: string | null
//     provider: string
//     provider_metadata: any | null
//     createdAt: string
//     updatedAt: string
//     publishedAt: string
//     related: RelatedComponent[]
// }

// interface ImageFormats {
//     thumbnail: ImageFormat
//     medium?: ImageFormat
//     large?: ImageFormat
//     small?: ImageFormat
// }

// interface ImageFormat {
//     name: string
//     hash: string
//     ext: string
//     mime: string
//     path: string | null
//     width: number
//     height: number
//     size: number
//     sizeInBytes?: number
//     url: string
// }

// interface RelatedComponent {
//     __type: string
//     id: number
//     subheadling?: string
//     headline?: string
// }