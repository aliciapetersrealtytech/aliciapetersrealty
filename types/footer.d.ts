// Text Node Interface
interface TextNode {
    type: string
    text: string
}

// Paragraph Interface
interface Paragraph {
    type: string
    children: TextNode[]
}

// Contact Info Interface
interface ContactInfo {
    id: number
    headline: string
    contactInfo: Paragraph[]
}

// Keller Williams Info Interface
interface KWInfo {
    id: number
    name: string
    dre: string
    companyName: string
    companyDre: string
}

// Social Media Interface
interface SocialMedia {
    id: number
    documentId: string
    show: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
    socialPlatform: string
    url: string
}

// Footer Content Interface
interface FooterContent {
    id: number
    contactLocation: ContactInfo[]
    kwInfo: KWInfo
    social_medias: SocialMedia[]
}

// Main Interface
interface FooterData {
    id: number
    documentId: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    footerContent: FooterContent
}