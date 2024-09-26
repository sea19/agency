export default defineEventHandler(async (event) => {
    const companyId = getRouterParam(event, 'companyId');
    const companiesInfo = await useStorage('files').getItem<Record<string, unknown>[]>('fake_db:companiesInfo.json');

    const result = companiesInfo?.find(element => element['companyId'] == companyId);

    return result;
});
