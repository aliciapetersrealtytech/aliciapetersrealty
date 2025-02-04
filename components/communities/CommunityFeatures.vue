<template>
    <section class="flex flex-col w-full max-w-[1140px] mx-auto py-20 bg-faint">
        <div class="py-8">
            <h3 class="h3 text-contrast">{{ dataObject?.headline  }}</h3>
        </div>
        <div>
            <ul>
                <li v-for="item in dataObject?.attration" :key="item.id" class="flex flex-row justify-between py-2">
                    <p class="p text-contrast">{{ item.attractionLabel.split('-')[0] }}</p>
                     <p class="p text-contrast">{{ item.attractionLabel.split('-')[1] }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
    defineProps<{ dataObject?: Attraction }>();
</script>