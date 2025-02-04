export default defineNuxtRouteMiddleware((to) => {
    const adminStore = useAdminStore()

    if (to.name === 'index') {
        adminStore.setFooterPadding('')
    } else {
        adminStore.setFooterPadding('mb-20 mt-28')
    }
})