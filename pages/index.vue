<template>
    <section class="page-goods">
        <UISelect
            v-model="selectedCategory"
            :items="categories"
            width="438px"
            class="page-goods__select"
        />
    </section>
</template>

<script setup lang="ts">
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
.page-goods {
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
