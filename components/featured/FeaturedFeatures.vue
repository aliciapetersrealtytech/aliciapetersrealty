<template>
    <section class="flex gap-12 w-full max-w-[1140px] mx-auto my-20">
        <ul class="flex flex-col w-1/2">
            <li class="flex flex-row justify-between border-b border-contrast py-6">
                <div class="">
                    <h3>Bedrooms</h3>
                </div>  
               <div class="col-start-2 col-span-3">
                    <p>{{ dataObject?.bedrooms }}</p>
                </div>   
            </li>
            <li class="flex flex-row justify-between border-b border-contrast py-6">
                <div class="">
                    <h3>Bathrooms</h3>
                </div>    
                <div>
                    <p>{{ dataObject?.fullBathrooms }}</p>
                </div>  
            </li>
            <li class="flex flex-row justify-between border-b border-contrast py-6">
                <div class="">
                    <h3>Living area</h3>
                </div>    
                <div>
                    <p>{{ dataObject?.interiorArea }}</p>
                </div>  
            </li>

            <li class="flex flex-row justify-between border-b border-contrast py-6">
                <div class="">
                    <h3>Garage size</h3>
                </div>    
                <div>
                    <p>{{ dataObject?.garages }}</p>
                </div>  
            </li>
            <li class="flex flex-row justify-between border-b border-contrast py-6">
                <div class="">
                    <h3>Appliances</h3>
                </div>    
                <div class="ml-20">
                    <p>{{ dataObject?.appliances }}</p>
                </div>  
            </li>
        </ul>

        <ul class="flex flex-col w-1/2">
            <li class="flex flex-row justify-between border-b border-contrast py-6">
                <div class="">
                    <h3>Pool</h3>
                </div>  
               <div class="col-start-2 col-span-3">
                    <p>{{ dataObject?.pool }}</p>
                </div>   
            </li>
            <li class="flex flex-row justify-between border-b border-contrast py-6">
                <div class="">
                    <h3>Parking</h3>
                </div>    
                <div>
                    <p>{{ dataObject?.garages }}</p>
                </div>  
            </li>
            <li class="flex flex-row justify-between border-b border-contrast py-6">
                <div class="">
                    <h3>Security features</h3>
                </div>    
                <div>
                    <p>{{ dataObject?.securityFeatures }}</p>
                </div>  
            </li>

            <li class="flex flex-row justify-between border-b border-contrast py-6">
                <div class="">
                    <h3>Heat type</h3>
                </div>    
                <div>
                    <p>{{ dataObject?.heatType }}</p>
                </div>  
            </li>
        </ul>
    </section>  
</template>
<script setup lang="ts">
    defineProps<{ dataObject?: IFeaturedProperty | null }>();
</script>