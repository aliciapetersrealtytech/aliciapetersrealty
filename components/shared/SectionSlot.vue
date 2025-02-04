<template>
    <section class="flex w-full h-full" :class="[bgColor, padding] ">
        <div class="my-20 md:my-60 mx-auto w-full">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    bgColor: {
        type: String,
        default: 'bg-white'
    },
    padding: {
        type: String,
        default: 'px-6 md:px-0'
    }
})
</script>