<template>
    <section class="flex w-full h-full bg-faint" :class="bgColor">
        <div class="flex flex-row w-full max-w-[1140px] mx-auto my-8 justify-between">
            <div class="flex flex-col">
                <div>
                    <h2 class="h2">{{label}}</h2>
                </div>
                <div class="flex flex-col my-2 justify-center">
                    <h3 class="h3 text-contrast">Alicia Peters</h3>
                    <p class="h5">CA DRE# 02189179</p>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <NuxtLink to="https://calendly.com/aliciapeters-kw/buyerconsult" class="btn-primary-white-full" target="_blank">
                    schedule a call
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    bgColor: {
        type: String,
        default: 'bg-faint'
    },
    label: {
        type: String,
        default: `Interested in this property? Let's talk!`
    }
})
</script>