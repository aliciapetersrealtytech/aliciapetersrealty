export const useBaseCmsUrl = () => {
    const config = useRuntimeConfig()
    const baseUrl = process.dev
        ? config.public.cmsDevUrl
        : config.public.cmsProdUrl

    console.log('baseUrl', baseUrl)
    return baseUrl
}