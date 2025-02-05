<template>
    <div class="max-w-[1140px] -translate-x-1/2 relative left-1/2">
        <div class="flex justify-center mb-12 md:mb-24 mx-auto">
            <h2 class="h2 text-contrast text-center">{{ dataObj?.headline }}</h2>
        </div>

        <div class="flex flex-col gap-y-5 relative">
            <ClientOnly>
                <div>
        
                    <swiper-container
                        ref="communityRef" 
                        class="h-full w-full" 
                        loop="true" 
                        :autoplay="false" 
                        :slidesPerView="2"
                        :spaceBetween="10"
                        :breakpoints="{
                            '640': {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            '1024': {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                        }"
                    >
                        <swiper-slide class="flex justify-center items-center" v-for="neighborhood in neighborhoodDetailData" :key="neighborhood?.id">
                            <CommunitiesNeighborhoodCard  
                                :headline="neighborhood?.headline!"
                                :url="imageData(neighborhood)"
                                :slug="neighborhood?.slug!"
                            />
                        </swiper-slide>
                    </swiper-container>
                </div>
                <div v-if="neighborhoodDetailData.length > 4" class="flex h-auto justify-end items-top z-30">
                    <button @click="swiper.prev()" class="flex justify-end transition mx-2 w-[60px] h-[60px] duration-500 border border-lighter rounded-full bg-transparent hover:bg-light">
                        <div class="flex items-center h-full p-4">
                            <NuxtImg src="/img/arrow-left.png" format="webp" class="object-cover"/>
                        </div>

                    </button>
                    <!-- Go forward one slide -->
                    <button @click="swiper.next()" class="flex justify-end transition mx-2 w-[60px] h-[60px] duration-500 border border-lighter rounded-full bg-transparent hover:bg-light">
                        <div class="flex items-center h-full p-4">
                            <NuxtImg src="/img/arrow-right.png" format="webp" class="object-cover"/>
                        </div>
                    </button>
                </div>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{ dataObj?: Neighborhoods }>()

    const communityRef = ref(null)
    const swiper = useSwiper(communityRef, {
        speed: 400
    })

    const dataObj = computed(() => props.dataObj)
    const neighborhoodDetailData = computed(() => {
        return dataObj.value?.neighborhoodData?.map((item) => {
            return item.neighborhood_data[0] as NeighborhoodInfo | undefined
        }).filter(Boolean) || []
    })

    const imageData = (item?: NeighborhoodInfo):string | undefined => {
        return item?.image?.formats?.large?.url ?? item?.image?.formats?.medium?.url
    }
</script>

<style scoped lang="scss">
</style>