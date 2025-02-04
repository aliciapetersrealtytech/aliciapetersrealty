<template>
    <div class="px-20 pt-20 pb-40">
        <div class="flex flex-row">
            <div class="w-1/2">
                <CommunitiesCommunityHero 
                    :images="images"
                />
            </div>
            <div class="flex flex-col items-center justify-center w-1/2 px-20">
                <h2 class="h3 text-contrast pb-20">{{ title }}</h2>
                <p v-for="(content, index) in description" :key="index" class="p text-black text-center">
                    {{ content.children[0]?.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ 
        images: Image[] | undefined,
        description: Description[] | undefined,
        title: string | undefined
     }>()
</script>