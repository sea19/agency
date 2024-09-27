import type { ICompanyRating } from '~/types/entities';

export default defineEventHandler(async (event) => {
    const companyId = getRouterParam(event, 'companyId');
    const companyRatings = await useStorage('files').getItem<ICompanyRating[]>('fake_db:companyRatings.json');

    const result = companyRatings?.find(element => element['companyId'] == companyId);

    return result;
});
