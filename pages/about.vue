<!-- eslint-disable @stylistic/max-len -->
<template>
    <section class="page-about">
        <CompanyInfo class="page-about__company-info" />

        <section class="about-company">
            <h2 class="about-company__title">О компании</h2>
            <p v-if="companyInfo?.description">{{ companyInfo?.description }}</p>
            <p v-else>Информация не указана</p>
        </section>

        <WorkSchedule :start-time="companyInfo?.startTime" :finish-time="companyInfo?.finishTime" />

        <section v-if="companyInfo?.address" class="company-location">
            <div class="company-location__block">
                <h2 class="company-location__title">Местоположение</h2>
                <address class="company-location__address">
                    <p>{{ companyInfo.address }}</p>
                </address>
            </div>

            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A00d1575554c43157e4737ec7a1af448aa36e61501bca7d91cb52ca0a31c70f3e&amp;source=constructor"
                frameborder="0"
                class="company-location__map"
            />
        </section>
    </section>
</template>

<script setup lang="ts">
import { useCompanyStore } from '~/store/company';
import type { ICompanyInfo } from '~/types/entities';

const companyStore = useCompanyStore();
const { companyId } = storeToRefs(companyStore);

const { data: companyInfo } = await useCustomFetch<ICompanyInfo>(`/company/info/${companyId.value}`);
</script>

<style scoped lang="scss">
.page-about {
    display: flex;
    flex-direction: column;
    gap: 12px;

    max-width: 560px;

    margin: 0 auto;
    padding: 32px 0 64px;

    &__company-info {
        display: none;
    }
}

.about-company {
    padding: 20px;
}

.company-location {
    display: flex;

    &__block {
        padding: 20px;
    }

    &__address {
        color: $c-primary;
        font-size: 17px;
    }

    &__map {
        width: 200px;

        border-radius: 10px 20px 20px 0;
    }
}

@media screen and (max-width: 960px) {
    .page-about {
        padding: 24px 0 48px;

        &__company-info {
            display: flex;
        }
    }

    .company-location {
        flex-direction: column-reverse;

        &__address {
            font-size: 15px;
        }

        &__map {
            width: 100%;

            border-radius: 20px 20px 0 0;
        }
    }
}
</style>
