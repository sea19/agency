import { defineStore } from 'pinia';

type Company = string | number | null;

export const useCompanyStore = defineStore('companyStore', () => {
    const companyId = ref<Company>(null);

    function setCompany(value: Company) {
        companyId.value = value;
    }

    return { setCompany, companyId };
});
