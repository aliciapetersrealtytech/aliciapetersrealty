export function useAPI<T>(
    url: string | (() => string),
    options?:
        {
            collection?: string,
            key?: string
            lazy?: boolean
            strapiQueries?: string
        }
) {
    const apiUrl = typeof url === 'function' ? url() : url
    const key = options?.key || `api-${apiUrl}`

    return useAsyncData<T>(
        key,
        () => $fetch(`${apiUrl}`, {
            method: 'POST',
            body: {
                queries: options?.strapiQueries,
                collection: options?.collection
            },
            headers: { 'Content-Type': 'application/json' },
        }),
        {
            lazy: options?.lazy || false,
        }
    )
}