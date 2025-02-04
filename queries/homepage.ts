import * as qs from 'qs'

// export const urlParamsObject = qs.parse('populate[SEO][populate]=*&populate[Sections][on][components.hero-carousel][populate][heroLink][populate]=*&populate[Sections][on][components.hero-carousel][populate][heroImages][populate]=*&populate[Sections][on][components.two-column-image-text][populate]=*&populate[Sections][on][components.testimonials-section][populate][testimonialGrid][populate]=*')

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