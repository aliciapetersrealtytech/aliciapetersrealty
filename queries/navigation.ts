import * as qs from 'qs'

/**
 * Stapi query for retrieving site navigation content
 * @returns Stringified query
 */

const query = {
    populate: "*"
}

export const urlNavigationQuery = qs.stringify(query, { encode: false })