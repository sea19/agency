import type { Id } from '~/types/Id';

type CompanyId = Id | null;

export const useCompanyStore = defineStore('companyStore', () => {
    const companyId = ref<CompanyId>(null);

    function setCompanyId(value: CompanyId) {
        companyId.value = value;
    }

    return { setCompanyId, companyId };
});
