<template>
    <div class="rating-info">
        <template v-if="isVerified">
            <img src="/assets/icons/premium.svg" alt="Проверено">
            <span>Документы проверены</span>
            <span>•</span>
        </template>

        <template v-if="score">
            <img src="/assets/icons/star.svg" alt="Рейтинг">
            <span>{{ score }}</span>
            <span>•</span>
        </template>

        <span>{{ comments }}</span>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    isVerified?: boolean;
    score?: number;
    reviewCount?: number;
}

const props = defineProps<IProps>();

const comments = computed(() => {
    if (!props.reviewCount) return 'Нет отзывов';

    return `${props.reviewCount} отзывов`;
});
</script>

<style scoped lang="scss">
.rating-info {
    display: flex;
    align-items: center;
    gap: 4px;
}
</style>
