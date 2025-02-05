<template>
    <header class="absolute w-full mt-5 z-50 px-10">
        <div class="navbar flex justify-between items-center">
            <div class="logo-container">
                <NuxtImg src="/img/alicia-peters-logo-white.png" height="50" width="auto" format="webp"/>
            </div>
            <nav class="hidden md:block">
                <div class="flex flex-row" :class="`text-${textColor}`">
                    <div v-for="link in navigationContent" :key="link.id">
                        <NuxtLink v-if="link.link" :to="`${link.link}`" class="mx-2 font-secondary text-base">
                            {{ link.title }}
                        </NuxtLink>
                    </div>
                    <button @click="triggerModal" class="mx-2 font-secondary text-base">
                        Contact
                    </button>
                </div>
            </nav>

            <div class="md:hidden absolute right-6">
                <button @click="triggerMenu(!navState)" class="">
                    <NuxtImg src="/hamburger-nav.svg" width="30" height="auto"/>
                </button>
                <div class="container flex flex-col" :class="{'active' : navState}">
                    <div class="wrapper flex flex-col h-full justify-start">
                        <button @click="triggerMenu(!navState)" class="h5 flex flex-row items-center justify-end">
                            <Icon name="uil:times" class="text-contrast text-2xl" />
                        </button>
                        <div class="flex flex-col py-20 items-end">
                            <div v-for="link in navigationContent" :key="link.id">
                                <NuxtLink v-if="link.link" :to="`${link.link}`" @click.native="triggerMenu(!navState)" class="mx-2 my-2 font-secondary text-base text-contrast">
                                    {{ link.title }}
                                </NuxtLink>
                                <button v-else @click="triggerModal" class="mx-2 my-2 font-secondary text-base text-contrast">
                                    Contact
                                </button>
                            </div>

                            <div class="border border-r-0 border-b-0 border-l-0 border-contrast my-6">
                                <ul class="flex flex-col mt-2 ">
                                    <li>
                                        <NuxtLink to="https://www.instagram.com/aliciapeters.realty/" target="_blank" external>
                                            <p class="p font-secondary text-base my-1 text-contrast">Instagram</p>
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="https://www.linkedin.com/in/apeters2019/" target="_blank" external>
                                            <p class="p font-secondary text-base my-1 text-contrast">LinkedIn</p>
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="https://www.facebook.com/profile.php?id=61564360294620&mibextid=LQQJ4d" target="_blank" external>
                                            <p class="p font-secondary text-base my-1 text-contrast">Facebook</p>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col items-end border border-r-0 border-b-0 border-l-0 border-contrast my-1 text-end">
                                <p class="mt-3 h5 normal-case">(323) 787-5431 <br/>aliciapeters@kw.com</p>
                                <div class="">
                                    <h5 class="h5 mt-4">
                                        office
                                    </h5>
                                    <p class="h5 normal-case">(323) 432-6400</p>
                                </div>
                                <div>
              
                                </div>
                            </div>
                            <div class="flex flex-col items-end ">
                                <p class="h5 normal-case">
                                    CA DRE# 02189179
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <SharedBaseModal
            :v-model="adminStore.getModalState"
            title="Modal for contact"
        >
        <p>VModel: The content of the modal</p>
        </SharedBaseModal>
    </header>
</template>

<script setup lang="ts">
    import { useModal } from 'vue-final-modal'
    import SharedBaseModal from '~/components/shared/BaseModal.vue'
    import { urlNavigationQuery } from '@/queries/navigation'

    const baseUrl = useBaseUrl()
    const { navState, triggerMenu } = useNavigation()
    const adminStore = useAdminStore()
    const route = useRoute();
    const textColor = ref('white')
    const isMenuOpen = ref(false)

    const { open, close } = useModal({
        component: SharedBaseModal,
        attrs: {
            title: 'Hello World!',
            onConfirm() {
            close()
            },
        },
        slots: {
            default: '<p>The content of the modal</p>',
        },
    })

    const triggerModal = async () => open()

    /**
     * Fetch navigation data
     */
    console.log('nav', `${baseUrl}/api/global`)
    const { data: navigationContent, error, refresh } = await useAPI<INavigation[]>(`${baseUrl}/api/global`,
        { 
            collection: 'api/navigations',
            strapiQueries: urlNavigationQuery,
            key: 'navigationcontent', 
            lazy: false
        }
    );

    console.log('navigationContent', navigationContent.value)

    watch(route, value => {
        if(value.path.includes('community')) {
            textColor.value = 'contrast'
        } else {
            textColor.value = 'white'
        }
    }, 
    {deep: true, immediate: true})
</script>

<style scoped lang="scss">
    .container {
        background: white;
        border-radius: 5px;
        position: fixed;
        top: 20px;
        right: 20px;
        width: 320px;
        height: calc(100vh - 10vh);
        z-index: 30;
        overflow: hidden;
        transition: clip-path 0.8s cubic-bezier(0.16, 1.05, 0.71, 0.95);
        clip-path: polygon(90% 0%, 100% 0%, 100% 0%, 90% 0%);
    }

    .active {
        clip-path: polygon(0px 0px, 320px 0px, 320px 90vh, 0px 90vh)
    }

    .wrapper {
        padding: 20px;
    }
</style>
