import { Loader } from '@googlemaps/js-api-loader'

export const useGeocoder = () => {
    const lat = ref<number | null>(null)
    const lng = ref<number | null>(null)
    const error = ref<string | null>(null)
    const geocoder = ref<google.maps.Geocoder | null>(null)
    const config = useRuntimeConfig()

    /**
     * Google Maps JavaScript API
     */
    const loader = new Loader({
        apiKey: config.public.GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places'],
    })

    /**
     * Func to retrieve the lat/lng of any given address
     * 
     * @param 
     * @returns 
     */
    const getLatLng = async (address: string | undefined): Promise<{ lat: number; lng: number } | null | undefined> => {
        if (!address) {
            error.value = 'Address is required'
            return
        }

        try {
            await loader.load()

            if (typeof window !== 'undefined' && window.google && window.google.maps) {
                geocoder.value = new google.maps.Geocoder()

                return new Promise<{ lat: number; lng: number } | null>((resolve, reject) => {
                    if (geocoder.value) {
                        geocoder.value.geocode({ address }, (results, status) => {
                            if (status === 'OK' && results && results.length > 0 && results[0]?.geometry?.location) {
                                lat.value = results[0].geometry.location.lat()
                                lng.value = results[0].geometry.location.lng()
                                resolve({ lat: lat.value ?? 0, lng: lng.value ?? 0 })
                            } else {
                                error.value = `Geocoding failed: ${status}`
                                reject(new Error(`Geocoding failed: ${status}`))
                            }
                        })
                    } else {
                        error.value = 'Geocoder is not initialized.'
                        resolve(null)
                    }
                })
            } else {
                error.value = 'Google Maps API is not loaded.'
                return null
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                error.value = `Error loading Google Maps API: ${err.message}`
            } else {
                error.value = 'An unknown error occurred while loading Google Maps API.'
            }
            return null
        }
    }

    return { lat: lat.value, lng: lng.value, error, getLatLng }
}