interface Testimonial {
    id: number // Represents a single testimonial grid item
}

interface QuotePreviewChild {
    type: string // The type of content (e.g., 'text', 'paragraph')
    text: string // The actual text content
}

interface QuotePreview {
    type: string // The parent type (e.g., 'paragraph')
    children: QuotePreviewChild[] // An array of child elements
}

interface TestimonialsSection {
    __component: "components.testimonials-section"
    id: number // The ID of this section
    headline: string // The headline for the testimonials section
    quotePreview: QuotePreview[] // An array of quote previews
    testimonialGrid: Testimonial[] // An array of testimonial grid items
}