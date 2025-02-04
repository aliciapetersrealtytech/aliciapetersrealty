import * as qs from 'qs'

export const featuredQuery = (id: string | undefined) => qs.stringify({
    filters: {
        slug: {
            $eq: id, // Use the dynamic slug value
        },
    },
    populate: "*"
})