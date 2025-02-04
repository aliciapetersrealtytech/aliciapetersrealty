import * as qs from 'qs'

const query = {
    populate: {
        footerContent: {
            populate: "*"
        }
    }
}

export const urlFooterQuery = qs.stringify(query, { encode: false })