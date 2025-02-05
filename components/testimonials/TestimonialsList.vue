<template>
    <section>
        <div class="flex flex-col relative w-full z-10 before:content-[''] before:bg-[length:270px] md:before:bg-[length:400px] before:z-[-1] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-faint-logo before:bg-[16%_60%] before:bg-fixed before:bg-no-repeat">
            <div class="my-20 md:my-60">
                <div class="flex text-center justify-center w-full mx-auto mb-12 md:mb-24">
                    <h2 class="h2 text-contrast">{{ dataObj?.headline }}</h2>
                </div>
                <div class="flex flex-row px-6 md:px-20">
                    <div class="w-2/3">
                        <h2 class="h2" v-for="(child, index) in dataObj?.quotePreview[0]?.children" :key="index" v-html="child.text"></h2>
                    </div>
                </div>
                <div class="flex mt-20 px-6 md:px-20">
                    <div class="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-4 grid-rows-1 grid-flow-col w-full">

                        <ClientOnly>
                            <swiper-container ref="testimonialRef" class="w-full h-full col-start-2 col-span-3" effect="fade" loop="true" :autoplay="false">
                                <swiper-slide class="flex flex-col justify-top items-top" v-for="testimonialGroup in dataObj?.testimonialGrid" :key="testimonialGroup.id">

                                    <div v-for="(testimonial, tIndex) in testimonialGroup.testimonials" :key="testimonial.id" class="testimonial-item">
                                        <blockquote class="h3 text-lg md:text-2xl text-contrast">{{ testimonial.description }}</blockquote>
                                        <div class="mt-8">
                                            - <cite class="font-secondary font-normal uppercase not-italic ml-3 text-contrast">{{ testimonial.name }}</cite>
                                        </div>
                                    </div>
                                </swiper-slide>
                                
                            </swiper-container>
                        </ClientOnly>

                        <div class="flex h-auto justify-end items-top">
                            <button @click="swiper.prev()" class="flex justify-end transition mx-2 w-[60px] h-[60px] duration-500 border border-light rounded-full bg-transparent hover:bg-light">
                                <div class="flex items-center h-full p-4">
                                    <NuxtImg src="/img/arrow-left.png" format="webp" class="object-cover"/>
                                </div>

                            </button>
                            <!-- Go forward one slide -->
                            <button @click="swiper.next()" class="flex justify-end transition mx-2 w-[60px] h-[60px] duration-500 border border-light rounded-full bg-transparent hover:bg-light">
                                <div class="flex items-center h-full p-4">
                                    <NuxtImg src="/img/arrow-right.png" format="webp" class="object-cover"/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const baseUrl = useBaseCmsUrl()

    const props = defineProps<{ dataObj?: TestimonialsSection }>();

    const testimonialRef = ref(null)

    const swiper = useSwiper(testimonialRef, {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000
    })
    
    /**
     * Fetch testimonials
     */
    // const { data: testimonials, error, refresh } = await useAPI<ITestimonial[]>(
    //     'web/testimonials',
    //     { key: 'testimonials', lazy: false }
    // )
</script>