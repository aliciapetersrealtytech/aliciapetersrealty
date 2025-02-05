<template>
    <div class="bg-faint">
        <CommunitiesCommunityHeader 
            :headline="community?.headline"
            :subheadline="community?.subheadline"
        />
        <CommunitiesCommunityTwoColumnImageText 
            :images="community?.imageCrousel"
            :title="community?.title"
            :description="community?.description"
        />
        <SharedContactBanner
            bgColor="bg-white" 
            label="Interested in this community? Lets talk!"
        />
        <CommunitiesCommunityFeatures 
            :dataObject="schoolsData"
            category="Schools"
        />
        <CommunitiesCommunityRestaurants
            :dataObject="restaurantData"
            :restaurantImage="community?.restaurantImage?.url"
        />

        <CommunitiesCommunityRetail 
            :dataObject="shopsData"
        />
    </div>
</template>

<script setup lang="ts">
    import { neighborhoodsQuery } from '@/queries/neighborhoods'
    import { useRoute } from 'vue-router';
    // const { findOne, find } = useStrapi<INeighborhood>()

    // typed to Course
    // findOne('courses', '123')

    // const { data, pending, refresh, error } = await useAsyncData(
    //     'neighborhoodscontent',
    //     () => findOne<INeighborhood>('neighborhoods', id)
    // )

    // const response = await findOne<INeighborhood>('neighborhoods', {
    //     filters: {
    //         slug: {
    //             $eq: id,
    //         },
    //     },
    // })

    const route = useRoute();
    const id = route.params.id as string | undefined;
    const baseUrl = useBaseUrl()

    /**
     * Fetch homepage data
     */
    const { data: communityContent, error, refresh } = await useAPI<NeighborhoodInfo[]>(`${baseUrl}/api/global`,
        { 
            collection: `api/neighborhoods`,
            strapiQueries: neighborhoodsQuery(id),
            key: 'communitycontent', 
            lazy: false
        }
    );

    // NeighborhoodInfo

    const community = computed<NeighborhoodInfo | null>(() => {
        return communityContent.value?.[0] || null;
    })

    /**
     * Retrieve school data
     */
    const schoolsData = community.value?.Attraction.find(
        (item): item is Attraction => item.headline === 'Schools'
    );

    /**
     * Retrieve restaurant data
     */
    const restaurantData = community.value?.Attraction.find(
        (item): item is Attraction => item.headline === 'Restaurants and Eateries'
    );

    /**
     * Retrieve restaurant data
     */
    const shopsData = community.value?.Attraction.find(
        (item): item is Attraction => item.headline === 'Local Shops and Boutiques'
    );

    useSeoMeta({
        title: `Alicia Peters Realty | ${community.value?.headline}`,
        ogTitle: `Alicia Peters Realty | ${community.value?.headline}`,
        description: `${community.value?.description[0].children[0]?.text}`,
        ogDescription: `${community.value?.description[0].children[0]?.text}`,
        ogImage: `${community.value?.image?.formats?.medium?.url}`,
        twitterCard: 'summary_large_image',
        ogUrl: route.fullPath,
        twitterTitle: `Alicia Peters Realty | ${community.value?.headline}`,
        twitterDescription: `Checkout this amazing community| ${community.value?.headline}`,
        twitterImage: `${community.value?.image}`
    })

    definePageMeta({
    middleware: ["global-styling-change"]
    })

</script>