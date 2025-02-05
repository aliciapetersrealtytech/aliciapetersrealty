import { useBaseCmsUrl } from './useBaseCmsUrl'

export const useWebContentService = () => ({
    /**
     * Fetches a collection from the Strapi API based on the provided parameters.
     * 
     * @param {Object} params - The parameters for fetching the collection.
     * @param {string} params.collection - The name of the strapi collection to fetch.
     * @param {Record<string, any>} [params.query] - Query parameters to apply to the request.
     * @returns {Promise<T[]>} - The fetched collection data.
     */
    async getPageContent<T>({ query, collection }: { collection: string; query?: Record<string, any> }): Promise<T[]> {
        const config = useRuntimeConfig()
        const token = config.public.strapiToken
        const baseUrl = useBaseCmsUrl()
        const strapiQuery = query

        try {
            const response = await $fetch<{ data: T[] }>(`${baseUrl}/${collection}?${strapiQuery}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })

            return response.data
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Failed to fetch page content from Strapi',
            })
        }
    }
})