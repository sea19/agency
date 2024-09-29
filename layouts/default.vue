<template>
    <div class="page">
        <div class="page-block page-block__header">
            <LayoutHeader class="page-block__content" />
        </div>

        <div class="page-block page-subheader">
            <CompanyInfo show-phone-button class="page-subheader__company-info" />

            <client-only>
                <div class="page-subheader__tabs">
                    <UITabs v-model="selectedTab" :tabs="filteredTabs" align-tabs="center" />
                </div>
            </client-only>
        </div>

        <div class="page-block page-block__main">
            <main class="page-block__content page-main">
                <slot />
            </main>
        </div>

        <div class="page-block page-block__footer">
            <LayoutFooter class="page-block__content" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';
import { useCompanyStore } from '~/store/company';

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

const companyStore = useCompanyStore();
// Хардкод id компании
companyStore.setCompanyId(1);

const router = useRouter();
const selectedTab = ref('/');

const tabs = reactive([
    { label: 'Товары и услуги', value: '/' },
    { label: 'Агенты', text: 5, value: '/agents', isAuthRoute: true },
    { label: 'О компании', value: '/about' },
]);

const filteredTabs = computed(() => {
    if (isAuthenticated.value) return tabs;

    return tabs.filter(({ isAuthRoute }) => !isAuthRoute);
});

watch(router.currentRoute, () => {
    const { currentRoute } = router;
    const { fullPath } = currentRoute.value;
    if (selectedTab.value === fullPath) return;

    selectedTab.value = fullPath;
}, { immediate: true });

watch(selectedTab, () => {
    const { currentRoute } = router;
    const { fullPath } = currentRoute.value;
    if (selectedTab.value === fullPath) return;

    navigateTo(selectedTab.value);
});
</script>

<style scoped lang="scss">
.page {
    height: 100vh;

    display: flex;
    flex-direction: column;
}

.page-block {
    display: flex;
    justify-content: center;

    &__content {
        max-width: 1809px;
        width: 100%;

        padding: 0 32px;
    }

    &__header {
        position: sticky;
        top: 0;
        z-index: 10;

        height: 64px;

        background: $c-orange;
    }

    &__footer {
        background: $c-gray-1;
        border-top: 1px solid $c-gray-3;
    }
}

.page-subheader {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $c-gray-5;

    &__tabs {
        margin: 32px 0;
        width: 100%;
        overflow-x: auto;
    }
}

@media screen and (max-width: 950px) {
    .page-block {
        &__content {
            padding: 0 16px;
        }
    }

    .page-subheader {
        &__company-info {
            display: none;
        }

        &__tabs {
            margin: 8px 16px;
        }
    }

    .page-main {
        padding: 0;
    }
}
</style>
