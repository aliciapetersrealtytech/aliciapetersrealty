<template>
    <div class="w-full">
        <HomeHeroCarousel 
            :dataObj="heroCarouselSectionData"
        />

        <SharedSectionSlot>
            <SharedTwoColumnImageText 
                :aboutData="aboutSectionData"
            />
        </SharedSectionSlot>

        <SharedSectionSlot 
            bgColor="bg-faint">
            <CommunitiesNeignborhoods
                :dataObj="neighborhoodSectionData"
            />
        </SharedSectionSlot>

        <TestimonialsList 
            v-if="testimoanialsSectionData" 
            :dataObj="testimoanialsSectionData" 
        />

        <SharedSectionSlot 
            v-if="featuredPropertiesData"
            bgColor="bg-faint">
            <FeaturedProperties 
                :dataObj="featuredPropertiesData"
            />
        </SharedSectionSlot>

        <SharedSectionSlot>
           <SharedTwoColumnContactRequest
            :dataObj="buySellSectionData"/>
        </SharedSectionSlot>
    </div>
</template>

<script setup lang="ts">
    import { urlHomeQuery } from '@/queries/homepage'

    const baseUrl = useBaseUrl()
    const baseCmsUrl = useBaseCmsUrl()

    /**
     * Fetch homepage data
     */
    const { data: homecontent, error, refresh } = await useAPI<RealtyContent>(`${baseUrl}/api/homepage`,
        { 
            collection: 'api/home',
            strapiQueries: urlHomeQuery,
            key: 'homecontent', 
            lazy: false
        }
    );

    /**
     * Retrieve the hero carousel 
     */
    const heroCarouselSectionData = homecontent.value?.Sections.find(
        (item): item is HeroCarousel => item.__component === 'components.hero-carousel'
    );

    /**
     * Retrieve the about section
     */
    const aboutSectionData = homecontent.value?.Sections.find(
        (item): item is TwoColumnImageText => item.__component === 'components.two-column-image-text'
    );

    /**
     * Retrieve the testimonial section
     */
    const testimoanialsSectionData = homecontent.value?.Sections.find(
        (item): item is TestimonialsSection => item.__component === 'components.testimonials-section'
    );

    /**
     * Retrieve the testimonial section
     */
    const neighborhoodSectionData = homecontent.value?.Sections.find(
        (item): item is Neighborhoods => item.__component === 'neighborhood.neighborhoods'
    );

    /**
     * Retrieve the featured properties section
     */
    const featuredPropertiesData = homecontent.value?.Sections.find(
        (item): item is IFeaturedPropertiesComponent => item.__component === 'components.featured-properties'
    );

    /**
     * Retrieve the featured properties section
     */
    const buySellSectionData = homecontent.value?.Sections.find(
        (item): item is TwoColumnBuyerSeller => item.__component === 'components.two-column-buyer-seller'
    );

    useSeoMeta({
        title: homecontent.value?.SEO.metaTitle,
        ogTitle: homecontent.value?.SEO.metaTitle,
        description: homecontent.value?.SEO.metaDescription,
        ogDescription: homecontent.value?.SEO.metaDescription,
        ogImage: `${homecontent.value?.SEO.metaImage.url}`,
        twitterCard: 'summary_large_image',
        ogUrl: 'http://aliciapetersrealty.com',
        twitterTitle: homecontent.value?.SEO.metaTitle,
        twitterDescription: homecontent.value?.SEO.metaDescription,
        twitterImage: `${homecontent.value?.SEO.metaImage.url}`
    })

    definePageMeta({
    middleware: ["global-styling-change"]
    })
</script>