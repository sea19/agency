import type { ICompanyInfo } from '@/types/entities';

export default defineEventHandler(async (event) => {
    const companyId = getRouterParam(event, 'companyId');
    const companiesInfo = await useStorage('files').getItem<ICompanyInfo[]>('fake_db:companiesInfo.json');

    const result = companiesInfo?.find(element => element['companyId'] == companyId);

    return result;
});
