// Interface for SEO metadata
interface SEO {
    id: number
    metaTitle: string
    metaDescription: string
    keywords: string
    author: string
    metaImage: Image
}

// Interface for button links
interface ButtonLink {
    id: number
    buttonLabel: string
    isExternal: boolean
    type: string
    buttonLink: string
}

// Interface for image formats
interface ImageFormat {
    name: string
    hash: string
    ext: string
    mime: string
    path: string | null
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

interface ImageFormats {
    thumbnail: ImageFormat
    medium?: ImageFormat
    large?: ImageFormat
    small?: ImageFormat
}

// Interface for image objects
interface Image {
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
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
    related: Related[]
}

// Interface for related objects
interface Related {
    __type: string
    id: number
    subheadling: string
    headline: string
}

// Interface for testimonials
interface Testimonial {
    id: number
    documentId: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    name: string
    title: string
    description: string
}

// Interface for testimonial grids
interface TestimonialGrid {
    id: number
    testimonials: Testimonial[]
}

interface NeighborhoodData {
    id: number
    headline: string | null
    neighborhood_data: NeighborhoodInfo[]
}

interface NeighborhoodInfo {
    id: number
    documentId: string
    headline: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    slug: string
    description: Description[]
    title: string
    subheadline: string
    image: Image | null
    neighborhood: string | null
    Attraction: Attraction[]
    restaurantImage: Image
    imageCrousel: Image[]
}

interface Attraction {
    id: number
    headline: string
    attration: SubAttraction[]
}

interface SubAttraction {
    id: number
    attractionLink: string | null
    attractionLabel: string
}


interface Description {
    type: string
    children: DescriptionChild[]
}

interface DescriptionChild {
    type: string // e.g., "text"
    text: string
}

interface IText {
    type: "text"
    text: string
}

interface IParagraphChild {
    type: "paragraph"
    children: IText[]
}

type IDescription = IParagraphChild[]

// Interface for a single featured property
interface IFeaturedProperty {
    id: number
    documentId: string
    description: IDescription
    address: string,
    city: string,
    state: string,
    zip: string,
    location: IParagraphChild[]
    propertyStatus: string
    propertyType: string
    yearBuilt: string
    neighborhood: string
    interiorArea: string
    lotArea: string
    totalBathrooms: number
    fullBathrooms: number
    garages: number
    garageSize: string
    garage: number
    bedrooms: number
    appliances: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    securityFeatures: string
    heatType: string
    slug: string
    price: string
    pool: string
    previewImage: Image
    imageCarousel: Image[]
}

// Interface for hero carousel section
interface HeroCarousel {
    __component: "components.hero-carousel"
    id: number
    subheadling: string
    headline: string
    heroLink: ButtonLink
    heroImages: Image[]
}

// Interface for two-column image text section
interface TwoColumnImageText {
    __component: "components.two-column-image-text"
    id: number
    eyebrow: string
    headline: string
    description: string
    buttonLink: ButtonLink
    image: Image
}

// Interface for testimonials section
interface TestimonialsSection {
    __component: "components.testimonials-section"
    id: number
    headline: string
    quotePreview: {
        type: string
        children: { type: string; text: string }[]
    }[]
    testimonialGrid: TestimonialGrid[]
}

interface Neighborhoods {
    __component: string // e.g., "neighborhood.neighborhoods"
    id: number
    eyebrow: string | null
    headline: string
    neighborhoodData: NeighborhoodData[]
}

// Interface for the main "featured-properties" component
interface IFeaturedPropertiesComponent {
    __component: "components.featured-properties"
    id: number
    headline: string
    featured_properties: IFeaturedProperty[]
}

// Call-to-Action Interface
interface CTA {
    id: number
    label: string
    buttonType: string
    url: string
}

// Main Interface
interface TwoColumnBuyerSeller {
    __component: string
    id: number
    sellerEyebrow: string
    sellerHeadline: string
    buyerEyebrow: string
    buyerHeadline: string
    sellerImageBackground: Image
    buyerImageBackground: Image
    buyerCTA: CTA
    sellerCTA: CTA
}

// Interface for the main content object
interface RealtyContent {
    id: number
    documentId: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    title: string
    description: string
    slug: string
    SEO: SEO
    Sections: (
        HeroCarousel |
        TwoColumnImageText |
        TestimonialsSection |
        Neighborhoods |
        IFeaturedPropertiesComponent |
        TwoColumnBuyerSeller |
        AboutHeroComponent |
        AboutDescriptionComponent |
        WhyWorkWithMeComponent)[]
}
