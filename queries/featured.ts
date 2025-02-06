import * as qs from 'qs'

/**
 * Stapi query for retrieving featured property content
 * @param id String
 * @returns Stringified query
 */
export const featuredQuery = (id: string | undefined) => qs.stringify({
    filters: {
        slug: {
            $eq: id, // Use the dynamic slug value
        },
    },
    populate: "*"
})