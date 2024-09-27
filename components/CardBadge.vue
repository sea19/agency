<template>
    <div class="card-badge">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.card-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 4px 8px;

    width: fit-content;

    border-radius: 12px;

    background: rgba($c-black-2, 0.5);;
    color: $c-gray-1;
}
</style>
