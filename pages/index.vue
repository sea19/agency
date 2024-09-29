<template>
    <section class="page-products">
        <UISelect
            v-model="selectedCategory"
            :items="categories"
            class="page-products__select"
        />

        <section class="page-products__grid">
            <ProductCard v-for="product in filteredProducts" v-bind="product" :key="product.id" class="product-card" />
        </section>
    </section>
</template>

<script setup lang="ts">
import { useCompanyStore } from '~/store/company';

import { mapCategory } from '~/helpers/mapCategory';
import type { ICategoryElement, ISubcategoryElement } from '~/helpers/mapCategory';
import type { IProduct } from '~/types/entities';

const companyStore = useCompanyStore();
const { companyId } = storeToRefs(companyStore);

const { data: products } = await useCustomFetch<IProduct[]>(`/products/${companyId.value}`);

const selectedCategory = ref('all');

interface CategoryFilterItem {
    value: string;
    title: string;
}

type FilterElement = CategoryFilterItem | ICategoryElement | ISubcategoryElement;

const categories = computed(() => {
    const result: FilterElement[] = [{ title: 'Все товары и услуги', value: 'all' }];

    const productList = products.value ?? [];
    if (!productList?.length) return result;

    const categoryList = mapCategory(productList);
    result.push(...categoryList);

    return result;
});

const filteredProducts = computed(() => {
    const productList = products.value;

    if (!productList?.length) return [];
    if (selectedCategory.value === 'all') return productList;

    return productList.filter(({ subcategory }) => subcategory?.id === selectedCategory.value);
});
</script>

<style scoped lang="scss">
.page-products {
    height: 100%;

    margin-bottom: 64px;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__select {
        max-height: 56px;
        max-width: 438px;
        width: 100%;

        margin: 25px 0;
    }

    &__grid {
        width: 100%;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 24px;
    }

    @media screen and (max-width: 950px) {
        padding: 0 16px;
    }

    @media screen and (max-width: 425px) {
        &__grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }
}
</style>
