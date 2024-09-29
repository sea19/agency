import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware(() => {
    if (import.meta.server) return;

    const authStore = useAuthStore();
    const { isAuthenticated } = storeToRefs(authStore);

    if (isAuthenticated.value) return navigateTo('/');
});
