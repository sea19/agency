<template>
    <header class="page-header">
        <button class="menu-button">
            <img src="/assets/icons/burger-menu.svg" alt="Меню">
        </button>

        <nuxt-link to="/">
            <h1 class="logo">Annoncé</h1>
        </nuxt-link>

        <button class="bag-button">
            <img src="/assets/icons/bag.svg" alt="Корзина">
        </button>

        <button class="catalog-button">
            <img src="/assets/icons/category.svg" alt="Категории">
            <span>Все категории</span>
        </button>

        <button class="city-button">
            <img src="/assets/icons/location.svg" alt="Категории">
            <span>Ростов-на-Дону</span>
        </button>

        <v-divider :thickness="1" class="divider" vertical />

        <button class="advertising-button">Разместить объявление</button>

        <button class="profile-button">
            <img src="/assets/icons/burger-menu.svg" alt="Меню">
            <img src="/assets/img/avatar.webp" alt="Аватар" class="avatar">
        </button>
    </header>
</template>

<script setup lang="ts">

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

    display: flex;
    align-items: center;
    gap: 4px;
}

.city-button {
    display: flex;
    align-items: center;
    gap: 4px;
}

.divider {
    height: 32px;
    align-self: center;
    opacity: 1;
    border-color: $c-gray-5;
}

.advertising-button {
    color: $c-primary;
    font-weight: 500;
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
