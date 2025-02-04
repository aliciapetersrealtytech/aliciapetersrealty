interface AboutDescriptionComponent {
    __component: "components.about-description"
    id: number
    headline: string
    description: DescriptionBlock[]
}

interface DescriptionBlock {
    type: string // e.g., "paragraph"
    children: TextContent[]
}

interface TextContent {
    type: string // e.g., "text"
    text: string
}