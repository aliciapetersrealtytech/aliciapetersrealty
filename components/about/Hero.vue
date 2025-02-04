<template>
    <div class="h-screen relative">
        <div class="parallax-content overflow-hidden h-screen">
            <NuxtImg 
                :src="`${dataObject?.heroImage.url }`" 
                :style="`transform: translate3d(0, ${scroll}px, 0);`" 
                format="webp" 
                ref="parallaxRef" 
                class="w-full h-full object-cover"
            />
        </div>
        <div class="bg-black absolute top-0 left-0 opacity-45 w-full h-full z-10"></div>
        <div class="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-20 mx-auto">
            <NuxtImg src="/alicia-peters-logo-white.png" format="webp" class="object-cover" height="77"/>
            <div class="mt-5 mb-2">
                <h1 class="h1 ">{{ dataObject?.headline }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ dataObject?: AboutHeroComponent }>();

    const { $offsetValue } = useNuxtApp()
    const scroll = computed(() => $offsetValue())

    const baseUrl = useBaseCmsUrl()
    const containerRef = ref(null)
</script>