<template>
    <footer class="flex flex-col w-full max-w-[1140px] mx-auto">
        <div class="flex justify-center items-center flex-col mx-auto mb-20 text-center">
            <NuxtImg src="/img/alicia-peters-logo-contrast.png" format="webp" class="object-cover" width="88" height="77"/>
            <h4 class="h4 text-sm text-contrast">Los Angeles</h4>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 gap-y-20">
            <div v-for="location in contentData?.contactLocation" :key="location.id" class="border border-r-0 border-b-0 border-l-0 border-contrast mr-6">
                <h5 class="h5 mt-6">
                        {{ location.headline }}
                </h5>
                <div v-for="(item, index) in location.contactInfo" :key="index">
                    <p class="mt-3 h5 normal-case">{{ item?.children?.[0]?.text }}</p>
                </div>
            </div>
            <div class="border border-r-0 border-b-0 border-l-0 border-contrast mr-6 col-start-4">
               <h5 class="h5 mt-6">
                    socials
                </h5>
                <ul class="flex flex-row mt-3">
                    <li v-for="social in contentData?.social_medias">
                        <NuxtLink :to="`${social.url}`" target="_blank" external>
                            <Icon :name="`uil:${social.socialPlatform}`" class="text-contrast text-2xl mr-3" />
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <NuxtImg src="/img/kw-logo-dark.png" format="webp" class="object-cover" height="120"/>
            </div>
            <div class="flex flex-col col-span-3">
                <h5 class="mt-3 h5 normal-case">
                    {{ contentData?.kwInfo.name }} | {{ contentData?.kwInfo.dre }}
                </h5>
                <h5 class="mt-3 h5 normal-case">
                    {{ contentData?.kwInfo.companyName }} | {{ contentData?.kwInfo.companyDre }}
                </h5>
            </div>
        </div>
        
    </footer>
</template>

<script setup lang="ts">
    import { urlFooterQuery } from '@/queries/footer'

    const baseUrl = useBaseUrl()
    const baseCmsUrl = useBaseCmsUrl()

    /**
     * Fetch footer data
     */
    const { data: footerContent, error, refresh } = await useAPI<FooterData>(`${baseUrl}/api/global`,
        { 
            collection: 'api/footer',
            strapiQueries: urlFooterQuery,
            key: 'footercontent', 
            lazy: false
        }
    );

    const contentData = ref<FooterContent>()
    contentData.value = footerContent.value?.footerContent
</script>
