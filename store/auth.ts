import { defineStore } from 'pinia';

export const useAuthStore = defineStore('companyStore', () => {
    const isAuthorized = ref<boolean>(false);

    return { isAuthorized };
});
