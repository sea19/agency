<template>
    <div class="rating-info">
        <template v-if="isVerified">
            <img src="/assets/icons/premium.svg" alt="Проверено">
            <span class="verify-text verify-text--lg">Документы проверены</span>
            <span class="verify-text verify-text--sm">Проверен</span>
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

.verify-text {
    &--sm {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .verify-text {
        &--sm {
            display: block;
        }

        &--lg {
            display: none;
        }
    }
}
</style>
