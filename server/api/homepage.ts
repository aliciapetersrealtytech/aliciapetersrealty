import { H3Event, readBody } from 'h3'
import { useWebContentService } from './services/webContentServices'

export default defineEventHandler(async (event: H3Event) => {
    const webContentService = useWebContentService()
    const body = await readBody(event)

    // destructure body parameters
    const { collection, ...strapiQueries } = body

    // Throw 400 if strapi collection isnt set
    if (!collection) {
        throw createError({
            statusCode: 400,
            statusMessage: 'The "collection" parameter is required.',
        })
    }

    try {
        const data = await webContentService.getPageContent<RealtyContent>({
            collection: collection as string,
            query: strapiQueries.queries
        })

        return data
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch collection data.',
        })
    }
})