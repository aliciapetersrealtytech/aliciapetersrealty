<template>
    <section class="w-full max-w-[1140px] mx-auto my-20">
        <div class="flex flex-col w-full items-center mb-20">
            <h2 class="h2 text-contrast">
                {{ dataObject?.address }}
            </h2>
            <h3 class="h3 text-contrast">{{ dataObject?.price }}</h3>
            <h4 class="h4 my-2">
                <span class="mx-2">{{ dataObject?.bedrooms }} Beds</span>
                <span class="mx-2">{{ dataObject?.totalBathrooms }} Baths</span>
                <span class="mx-2">{{ dataObject?.interiorArea }}</span>
            </h4>
        </div>

        <div class="grid grid-cols-1">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 gap-y-4 border-b border-contrast py-6">
                <div class="">
                    <h3>Description</h3>
                </div>  
               <div class="col-start-2 col-span-3">
                    <div v-for="(item, index) in dataObject?.description" :key="index">
                        <p>{{ item?.children?.[0]?.text }}</p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 gap-y-4 border-b border-contrast py-6">
                <div class="">
                    <h3>Location</h3>
                </div>    
                <div>
                    <div v-for="(item, index) in dataObject?.location" :key="index">
                        <p>{{ item?.children?.[0]?.text }}</p>
                    </div>
                </div>  
            </div>
           <div class="grid grid-cols-1 md:grid-cols-4 gap-12 gap-y-4 border-b border-contrast py-6">
                <div class="">
                    <h3>Status</h3>
                </div>    
                <div>
                    <p>{{ dataObject?.propertyStatus }}</p>
                </div>  
            </div>
           <div class="grid grid-cols-1 md:grid-cols-4 gap-12 gap-y-4 border-b border-contrast py-6">
                <div class="">
                    <h3>Type</h3>
                </div>    
                <div>
                    <p>{{ dataObject?.propertyType }}</p>
                </div>  
            </div>
           <div class="grid grid-cols-1 md:grid-cols-4 gap-12 gap-y-4 border-b border-contrast py-6">
                <div class="">
                    <h3>Year build</h3>
                </div>    
                <div>
                    <p>{{ dataObject?.yearBuilt }}</p>
                </div>  
            </div>
        </div>
    </section>  
</template>
<script setup lang="ts">
    defineProps<{ dataObject?: IFeaturedProperty | null }>();
</script>