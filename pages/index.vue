<template>
    <section class="page-products">
        <UISelect
            v-model="selectedCategory"
            :items="categories"
            width="438px"
            class="page-products__select"
        />
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '@/store/company';

const companyStore = useCompanyStore();
const { companyId } = storeToRefs(companyStore);

const { data: companyInfo } = await useFetch(`/company/${companyId.value}`);
const { data: companyRating } = await useFetch(`/company/rating/${companyId.value}`);

const selectedCategory = ref('all');

const categories = reactive([
    { title: 'Все товары и услуги', value: 'all' },

    { title: 'Категория 1', type: 'subheader' },
    { title: 'Гробы', value: 'coffin', props: { subtitle: 5 } },
    { title: 'Урны', value: 'urn', props: { subtitle: 12 } },

    { title: 'Категория 2', type: 'subheader' },
    { title: 'Тапки', value: 'slippers', props: { subtitle: 2 } },
    { title: 'Покрывала', value: 'cover', props: { subtitle: 1 } },
]);
</script>

<style scoped lang="scss">
.page-products {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__select {
        max-height: 56px;
        margin: 25px 0;
    }
}
</style>
