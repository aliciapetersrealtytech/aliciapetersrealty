import * as qs from 'qs'

/**
 * Stapi query for retrieving footer content
 * @returns Stringified query
 */

const query = {
    populate: {
        footerContent: {
            populate: "*"
        }
    }
}

export const urlFooterQuery = qs.stringify(query, { encode: false })