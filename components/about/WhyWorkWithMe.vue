<template>
    <div class="max-w-[1140px] mx-auto">
        <div class="flex justify-center mb-24 mx-auto">
            <h2 class="h2 text-contrast">{{ dataObject?.headline }}</h2>
        </div>
        <div class="flex flex-wrap gap-3">
            <div 
              v-for="(description, index) in dataObject?.reason"
              :key="description.id"
              class="flex items-center md:w-1/2 lg:w-1/3 bg-white rounded p-20 [flex-basis:calc(100%-10px)]  md:[flex-basis:calc(50%-10px)] lg:[flex-basis:calc(33%-10px)]"
              :class="{ '!bg-transparent ' : isOdd(index)}"
            >
                <p class="p text-contrast text-center">{{ description.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  defineProps<{ dataObject?: WhyWorkWithMeComponent }>();

  const isOdd = (index: number) => index % 2 !== 0;
</script>

<style scoped lang="scss">

</style>