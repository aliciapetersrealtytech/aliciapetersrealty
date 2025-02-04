<template>
    <section class="hero h-[400px] md:h-[650px] lg:h-[750px] relative">
        <ClientOnly>
            <swiper-container ref="propertyDetailRef" class="h-full" effect="fade" loop="true" :autoplay="true">
                <swiper-slide class="flex justify-center items-center" v-for="property in dataObject?.imageCarousel" :key="property.id">
                    <NuxtImg 
                        :src="`${property?.url}`" 
                        format="webp" 
                        class="w-full h-full object-cover"
                    />
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
        <div class="gradient-bkg absolute top-0 left-0 z-10"></div>
        <div class="flex h-auto justify-center w-full items-center absolute h-full top-0 left-0 z-10">
            <button @click="swiper.prev()" class="flex justify-end transition mx-4 w-[60px] h-[60px] duration-500 border border-white rounded-full bg-white/50 hover:bg-white">
                <div class="flex items-center h-full p-4">
                    <NuxtImg src="/arrow-left.png" format="webp" class="object-cover"/>
                </div>

            </button>
            <!-- Go forward one slide -->
            <button @click="swiper.next()" class="flex justify-end transition mx-4 w-[60px] h-[60px] duration-500 border border-white rounded-full bg-white/50 hover:bg-white">
                <div class="flex items-center h-full p-4">
                    <NuxtImg src="/arrow-right.png" format="webp" class="object-cover"/>
                </div>
            </button>
        </div>
    </section>  
</template>
<script setup lang="ts">
    defineProps<{ dataObject?: IFeaturedProperty | null }>();

    const baseUrl = useBaseCmsUrl()
    const propertyDetailRef = ref(null)

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