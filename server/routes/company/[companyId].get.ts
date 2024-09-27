import type { ICompany } from '~/types/entities';

export default defineEventHandler(async (event) => {
    const companyId = getRouterParam(event, 'companyId');
    const companies = await useStorage('files').getItem<ICompany[]>('fake_db:companies.json');

    const result = companies?.find(element => element['id'] == companyId);

    return result;
});
