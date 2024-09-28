<template>
    <section class="page-auth">
        <header class="page-auth__header">
            <button class="back-link" @click="$router.back()">Назад</button>
        </header>

        <slot />
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page-auth {
    height: 100%;

    display: flex;
    flex-direction: column;

    &__header {
        padding: 16px;
    }
}

.back-link {
    color: $c-primary;
    font-weight: 500;
}
</style>
