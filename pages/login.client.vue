<template>
    <section class="page-login">
        <header class="page-login__header">
            <nuxt-link to="/" class="back-link">Назад</nuxt-link>
        </header>

        <section class="page-login__content">
            <AuthLoginForm :loading="loading" @submit="login" />
        </section>

        <teleport to="#alert-container">
            <v-alert
                v-if="showErrorAlert"
                key="login-error"
                type="error"
                class="alert-item"
            >
                Неправильный логин или пароль
            </v-alert>
        </teleport>
    </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';
import type { ICredentials } from '~/types/Credentials';

definePageMeta({
    layout: false,
    middleware: ['login'],
});

const authStore = useAuthStore();
const { loading } = storeToRefs(authStore);

const showErrorAlert = ref(false);

async function login(credentials: ICredentials) {
    try {
        await authStore.login(credentials);
    }
    catch {
        showErrorAlert.value = true;

        setTimeout(() => {
            showErrorAlert.value = false;
        }, 3000);
    }
}
</script>

<style scoped lang="scss">
.page-login {
    height: 100vh;

    display: flex;
    flex-direction: column;

    &__header {
        padding: 16px;
    }

    &__content {
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

.back-link {
    color: $c-primary;
    font-weight: 500;
}
</style>
