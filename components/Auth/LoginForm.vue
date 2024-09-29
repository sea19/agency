<template>
    <v-card class="login-form">
        <template #title>Вход</template>

        <v-form validate-on="submit lazy" @submit.prevent="onSubmit">
            <v-text-field
                v-model="authForm.username"
                label="Имя пользователя"
            />

            <v-text-field
                v-model="authForm.password"
                label="Пароль"
                type="password"
            />

            <v-btn :disabled="isDisabled" :loading="loading" type="submit" @click="onSubmit">Войти</v-btn>
        </v-form>
    </v-card>
</template>

<script setup lang="ts">
import type { ICredentials } from '~/types/Credentials';

interface IProps {
    loading?: boolean;
}

const props = defineProps<IProps>();

const authForm = reactive<ICredentials>({
    username: '',
    password: '',
});

interface IEmits {
    (e: 'submit', credentials: ICredentials): void;
}

const emit = defineEmits<IEmits>();

const isDisabled = computed(() => !(authForm.username && authForm.password));

function onSubmit() {
    if (isDisabled.value || props.loading) return;

    emit('submit', authForm);
}
</script>

<style scoped lang="scss">
.login-form {
    width: 100%;
    max-width: 560px;

    padding: 20px;
    border-radius: 20px;
}
</style>
