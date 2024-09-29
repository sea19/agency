import { skipHydrate } from 'pinia';
import type { ICredentials } from '~/types/Credentials';

export const useAuthStore = defineStore('authStore', () => {
    const isAuthenticated = useLocalStorage<boolean>('isAuthenticated', false);
    const setAuthentication = () => isAuthenticated.value = true;
    const resetAuthentication = () => isAuthenticated.value = false;

    const loading = ref(false);
    const load = () => loading.value = true;
    const unload = () => loading.value = false;

    async function login(credentials: ICredentials) {
        load();

        try {
            await $fetch('/auth/login', {
                method: 'POST',
                body: { ...credentials },
            });

            setAuthentication();
            navigateTo('/');
        }
        catch (error) {
            console.log(error);

            throw error;
        }
        finally {
            unload();
        }
    }

    async function logout() {
        load();

        try {
            await $fetch('/auth/logout', { method: 'POST' });
            resetAuthentication();
        }
        catch (error) {
            console.log(error);

            throw error;
        }
        finally {
            unload();
        }
    }

    async function refreshToken() {
        load();

        try {
            await $fetch('/auth/refresh', { method: 'POST' });
        }
        catch (error) {
            resetAuthentication();
            navigateTo('/login');

            throw error;
        }
        finally {
            unload();
        }
    }

    return {
        isAuthenticated: skipHydrate(isAuthenticated),
        loading,
        login,
        logout,
        refreshToken,
    };
});
