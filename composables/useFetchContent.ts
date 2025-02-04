export const useFetchContent = async <T>(id: string, url: string): Promise<T[]> => {
    const config = useRuntimeConfig()
    const baseUrl = process.dev ? config.public.apiBaseDev : config.public.apiBaseProd
    const apiUrl = `${baseUrl}${url}`

    try {
        const { data, error } = await useAsyncData(
            id,
            async () => await $fetch(apiUrl),
            { server: true }
        )

        if (error.value) {
            throw new Error(`Failed to fetch content: ${error.value}`)
        }

        if (!data.value) {
            throw new Error('No data returned from API')
        }

        return Array.isArray(data.value) ? data.value : (data.value as any).data || []
    } catch (err) {
        throw new Error(`Failed to fetch content from ${apiUrl}`)
    }
}