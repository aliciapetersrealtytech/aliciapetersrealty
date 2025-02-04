<template>
    <div class="flex flex-col md:flex-row w-full max-w-[1140px] -translate-x-1/2 relative left-1/2">
        <div class="flex flex-col justify-center items-center w-full md:w-1/2">
            <h4 class="h4">{{ aboutData.eyebrow }}</h4>
            <h2 class="h2 text-black my-6">{{ aboutData.headline }}</h2>
            <p class="p text-center mb-6 w-1/2">{{ aboutData.description }}</p>
            <NuxtLink :to="aboutData.buttonLink.buttonLink" class="btn-primary-contrast">
                {{ aboutData.buttonLink.buttonLabel }}
            </NuxtLink>
        </div>
        <div class="w-full my-8 md:mt-0 md:w-1/2 h-[400px] md:h-[627px] md:max-h-[627px]">
            <NuxtImg :src="`${aboutData.image.formats.large.url}`" format="webp"  height="627" class="w-full h-[400px] md:h-full object-cover md:object-cover"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    const baseUrl = useBaseCmsUrl()

    const props = defineProps({
        aboutData: {
            type: Object,
            default: () => {}
        },
    })
</script>