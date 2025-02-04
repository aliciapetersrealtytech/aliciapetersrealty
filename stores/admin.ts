import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', () => {
    const footerPadding = ref('')

    const getFooterPadding = computed(() => footerPadding.value)

    async function setFooterPadding(str: string) {
        footerPadding.value = str
        return footerPadding.value
    }

    return {
        footerPadding,
        setFooterPadding,
        getFooterPadding
    }
})