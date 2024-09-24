<template>
    <section class="company-info">
        <template v-if="companyInfo">
            <img :src="`/img/${companyInfo.imgSrc}`" alt="Логотип компании" class="company-info__logo">
            <h1 class="company-info__name">{{ companyInfo.name }}</h1>

            <RatingInfo v-bind="companyRating" />

            <UIButton size="large" class="company-info__number-button">Показать номер телефона</UIButton>
        </template>
    </section>
</template>

<script setup lang="ts">
const { data: companyInfo } = await useFetch('/company/info', {
    query: {
        companyId: 1,
    },
});

const { data: companyRating } = await useFetch('/company/rating', {
    query: {
        companyId: 1,
    },
});
</script>

<style scoped lang="scss">
.company-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__logo {
        max-width: 120px;
        max-height: 120px;

        border-radius: 20px;
    }

    &__name {
        margin: 24px 0 12px 0;
    }

    &__number-button {
        margin: 24px 0 32px 0;
    }
}
</style>
