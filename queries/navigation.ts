import * as qs from 'qs'

const query = {
    populate: "*"
}

export const urlNavigationQuery = qs.stringify(query, { encode: false })