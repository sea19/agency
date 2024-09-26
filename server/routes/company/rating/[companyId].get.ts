interface ICompanyRating {
    id: string | number;
    companyId: string | number;
    score?: number;
    reviewCount?: number;
    isVerified?: boolean;
}

export default defineEventHandler(async (event) => {
    const companyId = getRouterParam(event, 'companyId');
    const companyRatings = await useStorage('files').getItem<ICompanyRating[]>('fake_db:companyRatings.json');

    const result = companyRatings?.find(element => element['companyId'] == companyId);

    return result;
});
