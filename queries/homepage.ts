import * as qs from 'qs'

/**
 * Stapi query for retrieving homepage content
 * @returns Stringified query
 */

const query = {
    populate: {
        SEO: {
            populate: "*"
        },
        Sections: {
            on: {
                "components.hero-carousel": {
                    populate: {
                        heroLink: {
                            populate: "*"
                        },
                        heroImages: {
                            populate: "*"
                        }
                    }
                },
                "components.two-column-image-text": {
                    populate: "*"
                },
                "components.testimonials-section": {
                    populate: {
                        testimonialGrid: {
                            populate: "*"
                        }
                    }
                },
                "neighborhood.neighborhoods": {
                    populate: {
                        neighborhoodData: {
                            populate: {
                                neighborhood_data: {
                                    populate: "*"
                                }
                            }
                        }
                    }
                },
                "components.featured-properties": {
                    populate: {
                        featured_properties: {
                            populate: "*"
                        }
                    }
                },
                "components.two-column-buyer-seller": {
                    populate: "*"
                }
            }
        }
    }
}

export const urlHomeQuery = qs.stringify(query, { encode: false })