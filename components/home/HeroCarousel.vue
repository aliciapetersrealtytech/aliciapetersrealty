<template>
    <section class="homepage-hero">
        <div class="slideshow w-full h-screen relative">
            <div class="h-screen">
                <ClientOnly>
                    <swiper-container
                        ref="containerRef" 
                        class="h-full" 
                        effect="fade" 
                        loop="true" 
                        :autoplay="true">
                        <swiper-slide 
                            class="flex justify-center items-center" 
                            v-for="heroItem in dataObj?.heroImages" 
                            :key="heroItem.id">
                            <NuxtImg 
                                :src="`${heroItem.url}`" 
                                format="webp" 
                                :style="`transform: translate3d(0, ${scroll}px, 0);`" 
                                class="w-full h-full object-cover"/>
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
            </div>
            <div class="bg-black absolute top-0 left-0 opacity-45 w-full h-full z-10"></div>
            <div class="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-20 mx-auto">
                <NuxtImg 
                    src="/img/alicia-peters-logo-white.png" 
                    format="webp" 
                    class="object-cover" 
                    width="88"
                    height="77"/>
                <div class="mt-5 mb-2">
                    <h1 class="h1 ">{{ dataObj?.headline }}</h1>
                </div>
                <div class="mb-5">
                    <h3 class="h4 text-white">{{ dataObj?.subheadling }}</h3>
                </div>
                <NuxtLink 
                    v-if="dataObj?.heroLink.buttonLabel" 
                    :to="dataObj?.heroLink.buttonLink" 
                    class="btn-primary-white">
                    {{ dataObj?.heroLink.buttonLabel }}
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    defineProps<{ dataObj?: HeroCarousel }>();

    const baseUrl = useBaseCmsUrl()
    const { $offsetValue } = useNuxtApp()
    const containerRef = ref(null)
    const scroll = computed(() => $offsetValue())

    useSwiper(containerRef, {
        effect: 'fade',
        speed: 2000,
        autoplay: {
            delay: 5000,
        }
    })
</script>