import type { UseFetchOptions } from 'nuxt/app';
import { useAuthStore } from '~/store/auth';

export function useCustomFetch<T>(
    url: string | (() => string),
    options: UseFetchOptions<T> = {},
) {
    return useFetch(url, {
        retry: 1,
        retryStatusCodes: [401],

        async onResponseError({ response }) {
            const authStore = useAuthStore();
            const { refreshToken } = authStore;

            if (response.status === 401) {
                await refreshToken();
            }
        },

        ...options,
    });
}
