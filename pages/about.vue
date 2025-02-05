<template>
    <AboutHero :dataObject="heroCarouselSectionData"/>

    <SharedSectionSlot>
        <AboutDescription :dataObject="descriptionSectionData"/>
    </SharedSectionSlot>

    <SharedSectionSlot bgColor="bg-faint">
        <AboutWhyWorkWithMe :dataObject="whyWorkWithMeSectionData"/>
    </SharedSectionSlot>
</template>

<script setup lang="ts">

    import { urlAboutQuery } from '@/queries/about'

    const baseUrl = useBaseUrl()
    const baseCmsUrl = useBaseCmsUrl()

    /**
     * Fetch homepage data
     */
    const { data: aboutContent, error, refresh } = await useAPI<RealtyContent>(`${baseUrl}/api/homepage`,
        { 
            collection: 'api/about',
            strapiQueries: urlAboutQuery,
            key: 'aboutcontent', 
            lazy: false
        }
    );

    /**
     * Retrieve the hero carousel 
     */
    const heroCarouselSectionData = aboutContent.value?.Sections.find(
        (item): item is AboutHeroComponent => item.__component === 'components.about-hero'
    );

    /**
     * Retrieve the about description content
     */
    const descriptionSectionData = aboutContent.value?.Sections.find(
        (item): item is AboutDescriptionComponent => item.__component === 'components.about-description'
    );

    /**
     * Retrieve the why work with me content
     */
    const whyWorkWithMeSectionData = aboutContent.value?.Sections.find(
        (item): item is WhyWorkWithMeComponent => item.__component === 'components.why-work-with-me'
    );

    useSeoMeta({
        title: aboutContent.value?.SEO.metaTitle,
        ogTitle: aboutContent.value?.SEO.metaTitle,
        description: aboutContent.value?.SEO.metaDescription,
        ogDescription: aboutContent.value?.SEO.metaDescription,
        ogImage: `${aboutContent.value?.SEO.metaImage.url}`,
        twitterCard: 'summary_large_image',
        ogUrl: 'http://aliciapetersrealty.com',
        twitterTitle: aboutContent.value?.SEO.metaTitle,
        twitterDescription: aboutContent.value?.SEO.metaDescription,
        twitterImage: `${aboutContent.value?.SEO.metaImage.url}`
    })

    definePageMeta({
    middleware: ["global-styling-change"]
})
</script>