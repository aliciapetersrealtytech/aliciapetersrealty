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

// // typed to Course
    // findOne('courses', '123')
    const route = useRoute();
    const id = route.params.id as string | undefined;
    const baseUrl = useBaseUrl()
    // console.log('route.params.documentId', route.params.id)

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

    console.log('schoolsData', community.value)
    // console.log('response', response)

    useSeoMeta({
        title: 'Atwater Village | Alicia Peters Realty',
        ogTitle: 'Alicia Peters Realty',
        description: 'This is my amazing site, let me tell you all about it.',
        ogDescription: 'This is my amazing site, let me tell you all about it.',
        ogImage: '',
        twitterCard: 'summary_large_image',
        ogUrl: '',
        twitterTitle: 'Alicia Peters Realty',
        twitterDescription: 'Alicia Peters Realty',
        twitterImage: ''
    })

    definePageMeta({
    middleware: ["global-styling-change"]
    })

</script>