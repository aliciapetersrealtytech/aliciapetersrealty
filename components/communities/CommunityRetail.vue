<template>
    <section class="h-[450px] relative bg-faint">

        <div class="flex flex-col w-full w-full absolute top-0 left-0 h-full py-20">
            <div class="max-w-[1140px] mx-auto w-full">

                <div class="flex w-full pt-12">
                    <div class="flex flex-col items-center w-full mx-auto">
                        <div class="flex justify-start py-8">
                            <h3 class="h3 text-contrast">{{ dataObject?.headline }}</h3>
                        </div>
                        <div class="flex justify-start items-start">
                            <ul class="flex flex-row gap-3">
                                <li v-for="item in dataObject?.attration" :key="item.id" class="flex flex-row justify-between py-2">
                                     <NuxtLink :to="`${item.attractionLink}`" external target="_blank" class="btn-primary-white-full text-center">{{ item.attractionLabel }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    defineProps<{ dataObject?: Attraction }>();
</script>