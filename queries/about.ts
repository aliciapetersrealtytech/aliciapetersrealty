import * as qs from 'qs'

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