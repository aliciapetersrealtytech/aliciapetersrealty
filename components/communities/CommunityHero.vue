<template>
    <section class="hero relative">
        <ClientOnly>
            <swiper-container
                ref="propertyDetailRef" 
                class="h-full" 
                effect="fade" 
                loop="true" 
                :autoplay="true">
                <swiper-slide 
                    class="flex justify-center items-center overflow-hidden h-[600px]" 
                    v-for="community in images" 
                    :key="community.id">
                    <NuxtImg 
                        :src="`${community.url}`" 
                        format="webp" 
                        class="w-full h-full object-cover"
                        quality="100" 
                    />
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
        <div class="gradient-bkg absolute top-0 left-0 z-10"></div>
    </section>  
</template>
<script setup lang="ts">
    defineProps<{ 
        images: Image[] | undefined,
     }>()

    const baseUrl = useBaseCmsUrl()
    const params = useRoute().params
    const propertyDetailRef = ref(null)
    const { $offsetValue } = useNuxtApp()
    const scroll = computed(() => $offsetValue())

    const swiper = useSwiper(propertyDetailRef, {
    speed: 1000,
    autoplay: {
        delay: 5000,
    }
    })

</script>   

<style scoped lang="scss">
.gradient-bkg {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.3968181022408963) 0%, rgba(0,0,0,0) 41%);
}
</style>