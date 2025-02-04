<template>
    <div>
        <FeaturedHeader :dataObject="property"/>
        <FeaturedOverview :dataObject="property"/>
        <SharedContactBanner />
        <FeaturedFeatures :dataObject="property" />
        
        <GoogleMap
            :api-key="config.public.GOOGLE_MAPS_API_KEY"
            style="width: 100%; height: 500px"
            :center="center"
            :zoom="15"
        >
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>
<script setup lang="ts">
    import { featuredQuery } from '@/queries/featured'
    import { GoogleMap, Marker } from 'vue3-google-map'

    const config = useRuntimeConfig();
    const route = useRoute();
    const id = route.params.id as string | undefined;
    const baseUrl = useBaseUrl()
    const center = ref({})
    

    const { data: propertyContent } = await useAPI<IFeaturedProperty[]>(`${baseUrl}/api/global`, { 
            collection: `api/featured-properties/`,
            strapiQueries: featuredQuery(id),
            key: 'communitycontent', 
            lazy: false
        }
    );

    const property = computed<IFeaturedProperty | null>(() => {
        return propertyContent.value?.[0] || null;
    })

    onMounted(async () =>{
        const { getLatLng } = useGeocoder();
        const result = await getLatLng(property.value?.address);

        if (result) {
            center.value = { lat: result.lat, lng: result.lng}
        }
    })
    

    useSeoMeta({
        title: `Alicia Peters Realty | ${property.value?.address}`,
        ogTitle: `Alicia Peters Realty | ${property.value?.address}`,
        description: `Checkout this amazing property at ${property.value?.address}`,
        ogDescription: `Checkout this amazing property at ${property.value?.address}`,
        ogImage: property.value?.previewImage.url,
        twitterCard: 'summary_large_image',
        ogUrl: route.fullPath,
        twitterTitle: `Alicia Peters Realty | ${property.value?.address}`,
        twitterDescription: `Checkout this amazing property at ${property.value?.address}`,
        twitterImage: property.value?.previewImage.url
    })

    definePageMeta({
        middleware: ["global-styling-change"]
    })
</script>