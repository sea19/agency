<template>
    <section class="page-login">
        <AuthLoginForm :loading="loading" @submit="signIn" />
        <button @click="onLogout">LOGOUT</button>
        <button @click="onRefresh">REFRESH</button>
    </section>
</template>

<script setup lang="ts">
import type { ICredentials } from '~/types/Credentials';

definePageMeta({
    layout: 'auth',
});

const loading = ref(false);
const load = () => loading.value = true;
const unload = () => loading.value = false;

async function signIn(credentials: ICredentials) {
    load();

    try {
        const data = await $fetch('/auth/login', {
            method: 'POST',
            body: { ...credentials },
        });

        console.log(data);
    }
    finally {
        unload();
    }
}

async function onLogout() {
    load();

    try {
        const data = await $fetch('/auth/logout', { method: 'POST' });
        console.log('====data', data);
    }
    finally {
        unload();
    }
}

async function onRefresh() {
    load();

    try {
        const data = await $fetch('/auth/refresh', { method: 'POST' });
        console.log('====data', data);
    }
    finally {
        unload();
    }
}
</script>

<style scoped lang="scss">
.page-login {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
