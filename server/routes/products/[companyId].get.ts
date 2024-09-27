import type { IProduct } from '@/types/entities';

export default defineEventHandler(async (event) => {
    const companyId = getRouterParam(event, 'companyId');
    const products = await useStorage('files').getItem<IProduct[]>('fake_db:products.json');

    const result = products?.filter(element => element['companyId'] == companyId);

    return result;
});
