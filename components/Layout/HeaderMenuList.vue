<template>
    <client-only>
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
    </client-only>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
const { logout } = authStore;

const menuItems = reactive([
    { title: 'Выйти', value: 'logout', handler: logout },
]);
</script>

<style scoped>

</style>
