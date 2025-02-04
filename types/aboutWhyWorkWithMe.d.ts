interface WhyWorkWithMeComponent {
    __component: "components.why-work-with-me"
    id: number
    headline: string
    reason: Reason[]
}

interface Reason {
    id: number
    description: string
}