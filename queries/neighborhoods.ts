import * as qs from 'qs'

/**
 * Stapi query for retrieving neighborhood content
 * @param id String
 * @returns Stringified query
 */
export const neighborhoodsQuery = (id: string | undefined) => qs.stringify({
    filters: {
        slug: {
            $eq: id, // Use the dynamic slug value
        },
    },
    populate: {
        Attraction: {
            populate: "*"
        },
        imageCrousel: {
            populate: "*"
        },
        restaurantImage: {
            populate: "*"
        },
        image: {
            populate: "*"
        }
    }
})