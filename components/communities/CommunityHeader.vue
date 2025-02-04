<template>
    <div class="w-full max-w-[1140px] mx-auto py-40">
        <div class="flex flex-col items-center justify-center mb-0 mx-auto">
            <h2 class="h2 text-contrast">{{ headline }}</h2>
            <h4 v-if="subheadline" class="h4">{{ subheadline }}</h4>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ 
        headline: string | undefined,
        subheadline: string | undefined
     }>()
</script>