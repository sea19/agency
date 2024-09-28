<template>
    <div class="rating-info">
        <template v-if="isVerified">
            <img src="/assets/icons/premium.svg" alt="Проверено">
            <slot name="verify-text">
                <span>Документы проверены</span>
            </slot>
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
import type { IRating } from '~/types/entities';

type Props = Partial<IRating>;

const props = defineProps<Props>();

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
