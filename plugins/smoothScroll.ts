export default defineNuxtPlugin(async (nuxtApp) => {
    let parallaxRef = ref(0)

    const lenis = useLenis(({ scroll }) => {
        parallaxRef.value = .5 * (scroll / 2)
    })
    nuxtApp.lenis = lenis

    return {
        provide: {
            offsetValue: () => parallaxRef.value
        }
    }
})