<template>
    <header class="page-header">
        <button class="menu-button">
            <img src="/assets/icons/burger-menu.svg" alt="Меню">
        </button>

        <nuxt-link to="/">
            <h1 class="logo">Annoncé</h1>
        </nuxt-link>

        <client-only>
            <button v-if="isAuthenticated" class="bag-button">
                <UIBadge :content="1">
                    <img src="/assets/icons/bag.svg" alt="Корзина">
                </UIBadge>
            </button>
        </client-only>

        <button class="catalog-button">
            <img src="/assets/icons/category.svg" alt="Категории">
            <span>Все категории</span>
        </button>

        <button class="city-button">
            <img src="/assets/icons/location.svg" alt="Категории">
            <span>Ростов-на-Дону</span>
        </button>

        <client-only>
            <v-divider :thickness="1" class="divider" vertical />

            <button v-if="isAuthenticated" class="advertising-button">Разместить объявление</button>

            <v-menu v-if="isAuthenticated">
                <template #activator="{ props }">
                    <button class="profile-button">
                        <img src="/assets/icons/burger-menu.svg" alt="Меню" v-bind="props">
                        <img src="/assets/img/avatar.webp" alt="Аватар" class="avatar">
                    </button>
                </template>

                <v-list>
                    <v-list-item
                        v-for="item in menuItems"
                        :key="item.value"
                        :value="item.value"
                        @click="item.handler"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <nuxt-link v-else to="/login" class="login-button">
                <button>Войти</button>
            </nuxt-link>
        </client-only>
    </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const { logout } = authStore;

const menuItems = reactive([
    { title: 'Выйти', value: 'logout', handler: logout },
]);
</script>

<style scoped lang="scss">
.page-header {
    margin: 8px 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 24px;
}

.logo {
    width: 144px;

    font-family: 'NotoSerif', sans-serif;
    font-size: 28px;
    font-weight: 600;
}

.catalog-button {
    background: $c-gray-2;

    margin-right: auto;
    padding: 12px 16px;

    border-radius: 40px;

    font-size: 15px;
    font-weight: 500;

    display: flex;
    align-items: center;
    gap: 4px;
}

.city-button {
    width: 152px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.divider {
    height: 32px;
    align-self: center;
    opacity: 1;
    border-color: $c-gray-5;
}

.advertising-button {
    width: 205px;

    color: $c-primary;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-button {
    background: $c-gray-2;

    padding: 4px 4px 4px 12px;
    border-radius: 24px;

    display: flex;
    align-items: center;
    gap: 8px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 24px;
}

.menu-button,
.bag-button {
    display: none;
}

.login-button {
    color: $c-primary;
    font-weight: 500;
}

@media screen and (max-width: 950px) {
    .catalog-button,
    .city-button,
    .advertising-button,
    .profile-button,
    .divider {
        display: none;
    }

    .page-header {
        justify-content: space-between;
    }

    .menu-button {
        display: flex;
        align-items: center;
    }

    .bag-button {
        display: block;
    }
}
</style>
