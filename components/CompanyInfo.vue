<template>
    <section class="company-info">
        <template v-if="companyInfo">
            <img :src="companyInfo.imageUrl" alt="Логотип компании" class="company-info__logo">
            <h1 class="company-info__name">{{ companyInfo.name }}</h1>

            <RatingInfo v-bind="companyRating" />

            <UIButton
                v-if="showPhoneButton"
                size="large"
                class="company-info__number-button"
            >
                Показать номер телефона
            </UIButton>
        </template>
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCompanyStore } from '~/store/company';

interface IProps {
    showPhoneButton?: boolean;
}

defineProps<IProps>();

const companyStore = useCompanyStore();
const { companyId } = storeToRefs(companyStore);

const { data: companyInfo } = await useFetch(`/company/${companyId.value}`);
const { data: companyRating } = await useFetch(`/company/rating/${companyId.value}`);
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

        font-size: 24px;
        font-weight: 600;
        line-height: normal;
    }

    &__number-button {
        margin-top: 24px;
    }
}
</style>
