<template>
    <div class="w-full max-w-[1280px]  -translate-x-1/2 relative left-1/2">
        <div class="flex justify-center mb-24 mx-auto">
            <h2 class="h2 text-contrast">{{ dataObj?.headline }}</h2>
        </div>
        <div class="flex flex-col gap-3 relative">
            <ClientOnly>
                <div class="z-10">
                    <swiper-container ref="featuredPropertyRef" class="w-full h-full col-start-2 col-span-3" effect="fade" loop="true" :autoplay="true">
                        <swiper-slide class="flex" v-for="property in dataObj?.featured_properties" :key="property.id">
                            <div class="carousel__item relative h-[500px] w-full">
                                <NuxtLink :to="`/featured/${property.slug}`" class="before:transition-opacity before:duration-700 before:w-full before:h-full before:opacity-40 before:absolute before:left-0 before:top-0 before:bg-black before:content-[''] hover:before:opacity-10">
                                    <NuxtImg 
                                        :src="`${property.previewImage.url}`" 
                                        format="webp" 
                                        width="auto" 
                                        height="600" 
                                        class="w-full h-full object-cover"
                                    />
                                </NuxtLink>
                            </div>
                        </swiper-slide>
                    </swiper-container>
                </div>
                <div class="w-full z-20">
                    <swiper-container ref="detailsRef" class="w-full absolute bottom-1/4 pointer-events-none" effect="fade" loop="true" :autoplay="true">
                        <swiper-slide class="swiper-description flex pointer-events-none" v-for="property in dataObj?.featured_properties" :key="property.id">
                            <div class="relative ml-8 swiper-content">
                                <h3 class="h3">
                                    {{ property.address }} {{ property.city }}, {{ property.state }} {{ property.zip }}
                                </h3>
                                <p class="font-cormorant text-white text-4xl">${{ property.price }}</p>
                                <div class="flex flex-row mt-3">
                                    <span class="text-white text-sm">{{ property.bedrooms }} BD | {{ property.bedrooms }} BA | {{ property.interiorArea }}</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper-container>
                </div>

                <div class="flex h-auto justify-end items-top z-30">
                    <button @click="next()" class="flex justify-end transition mx-2 w-[60px] h-[60px] duration-500 border border-lighter rounded-full bg-transparent hover:bg-light">
                        <div class="flex items-center h-full p-4">
                            <NuxtImg src="/arrow-left.png" format="webp" class="object-cover"/>
                        </div>

                    </button>
                    <!-- Go forward one slide -->
                    <button @click="next()" class="flex justify-end transition mx-2 w-[60px] h-[60px] duration-500 border border-lighter rounded-full bg-transparent hover:bg-light">
                        <div class="flex items-center h-full p-4">
                            <NuxtImg src="/arrow-right.png" format="webp" class="object-cover"/>
                        </div>
                    </button>
                </div>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ dataObj?: IFeaturedPropertiesComponent }>();

    const baseUrl = useBaseCmsUrl()
    const featuredPropertyRef = ref(null);
    const detailsRef = ref(null);

    const next = () => {
        imageSwiper.next()
        detailsSwiper.next()
    }

    const imageSwiper = useSwiper(featuredPropertyRef, {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
        autoplay: {
            delay: 2000,
        }
    })

    const detailsSwiper = useSwiper(detailsRef, {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
        autoplay: {
            delay: 2000,
        }
    })

</script>   

<style scoped lang="scss">
    .swiper-content {
        opacity: 0;
    }
    .swiper-slide-active .swiper-content {
            animation: scale .9s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }

    @keyframes scale {
        0% {
            transform: translateX(0);
        }

        100% {
            opacity: 1;
            transform: translateX(30px);
        }
    }
</style>