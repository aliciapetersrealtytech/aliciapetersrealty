<template>
    <div class="relative h-[250px] md:h-[500px]">
        <NuxtLink 
            :to="`/community/${props.slug}`" 
            class="before:transition-opacity before:duration-700 before:w-full before:h-full before:opacity-40 before:absolute before:left-0 before:top-0 before:bg-black before:content-[''] hover:before:opacity-10">
                <NuxtImg 
                    :src="`${props.url}`" 
                    format="webp" 
                    width="auto" 
                    height="600" 
                    class="w-full h-full object-cover"
                />
        </NuxtLink>
        <div class="flex items-center justify-center absolute w-full top-0 bottom-0 pointer-events-none">
            <h3 class="font-cormorant font-bold text-white text-2xl">{{ props.headline }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        slug: string, 
        url: string | undefined,
        headline: string
    }>()
    const baseUrl = useBaseCmsUrl()
</script>