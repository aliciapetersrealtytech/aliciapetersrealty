import * as qs from 'qs'

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
        }
    }
})