<template>
    <section class="flex w-full h-full" :class="bgColor">
        <div class="mx-auto w-full my-12" :class="computedPadding">
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
    verticalPadding: {
        type: String,
        default: ''
    }
})

const computedPadding = computed(() => {
    return props.verticalPadding
})
</script>