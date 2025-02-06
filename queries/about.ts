import * as qs from 'qs'

/**
 * Stapi query for retrieving about page content
 * @returns Stringified query
 */

const query = {
    populate: {
        SEO: {
            populate: "*"
        },
        Sections: {
            on: {
                "components.about-hero": {
                    populate: "*"
                },
                "components.about-description": {
                    populate: "*"
                },
                "components.why-work-with-me": {
                    populate: "*"
                }
            }
        }
    }
}

export const urlAboutQuery = qs.stringify(query, { encode: false })