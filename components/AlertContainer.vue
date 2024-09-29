<template>
    <transition-group
        id="alert-container"
        name="alert-list"
        tag="div"
        enter-from-class="alert-container__enter-from"
        leave-to-class="alert-container__leave-to"
        enter-active-class="alert-container__enter-active"
        leave-active-class="alert-container__leave-active"
        appear
        class="alert-container"
    />
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.alert-container {
    position: fixed;
    bottom: 0;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    padding: 20px;

    .alert-item {
        width: 100%;
        max-width: 560px;
    }

    &__enter-from,
    &__leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    &__enter-active,
    &__leave-active {
        transition: all 0.5s ease;
    }
}
</style>
