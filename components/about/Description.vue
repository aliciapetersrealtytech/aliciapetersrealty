<template>
    <div class="max-w-[1140px] mx-auto">
        <div class="flex flex-col justfy-center items-center text-left md:text-center">
            <h2 class="h2 text-black my-6">{{ dataObject?.headline }}</h2>
            <p v-for="(content, index) in dataObject?.description" :key="index" class="p mb-6 w-full md:w-2/3 lg:w-1/2">
                {{ content.children[0]?.text }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ dataObject?: AboutDescriptionComponent }>();
</script>