export const useBaseUrl = () => {
    const config = useRuntimeConfig()
    const baseUrl = process.dev
        ? config.public.apiBaseDev
        : config.public.apiBaseProd
    return baseUrl
}