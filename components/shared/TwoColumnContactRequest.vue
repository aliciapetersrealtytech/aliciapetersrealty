<template>
    <div class="flex justify-center mb-24 mx-auto">
        <h2 class="h2 text-contrast">Let's talk</h2>
    </div>
    <div class="flex flex-row px-6 md:px-20">
        <div class="relative h-full">
            <div class="h-[600px]">
                <NuxtImg :src="`${dataObj?.sellerImageBackground.url}`" format="webp" width="auto" height="800" class="w-full h-full object-cover mix-blend-luminosity"/>
            </div>
            <div class="img-container absolute top-0 w-full"></div>
            <div class="flex flex-col items-center justify-center absolute w-full top-0 bottom-0">
                <h4 class="h4">{{ dataObj?.sellerEyebrow }}</h4>
                <h3 class="h3 text-contrast mb-6 my-3 text-3xl">{{ dataObj?.sellerHeadline }}</h3>
                <NuxtLink :to="dataObj?.buyerCTA.url" :class="`btn-${dataObj?.buyerCTA.buttonType}`" external target="_blank">
                    {{ dataObj?.buyerCTA.label }}
                </NuxtLink>
            </div>
        </div>
        <div class="relative h-full">
            <div class="h-[600px]">
                <NuxtImg :src="`${dataObj?.buyerImageBackground.url}`" format="webp" width="auto" height="800" class="w-full h-full object-cover mix-blend-luminosity"/>
            </div>
            <div class="img-container absolute top-0 w-full"></div>
            <div class="flex flex-col items-center justify-center absolute w-full top-0 bottom-0">
                <h4 class="h4">{{ dataObj?.buyerEyebrow }}</h4>
                <h3 class="h3 text-contrast mb-6 my-3 text-3xl">{{ dataObj?.buyerHeadline }}</h3>
                <NuxtLink :to="dataObj?.sellerCTA.url" :class="`btn-${dataObj?.sellerCTA.buttonType}`" external target="_blank">
                    {{ dataObj?.sellerCTA.label }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const baseUrl = useBaseCmsUrl()

    const props = defineProps<{ dataObj?: TwoColumnBuyerSeller }>();
</script>

<style scoped lang="scss">
    .img-container {
        height: 100%;
        width: 100%;
        background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background: rgb(244,242,240);
    background: linear-gradient(180deg, rgba(244,242,240,0.8337928921568627) 54%, rgba(179,165,152,0.8477984943977591) 100%);
    }
</style>