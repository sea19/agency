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
import { getNoun } from '~/utils';
import type { IRating } from '~/types/entities';

type Props = Partial<IRating>;

const props = defineProps<Props>();

const comments = computed(() => {
    const { reviewCount } = props;
    if (!reviewCount) return 'Нет отзывов';

    const pluralText = getNoun(reviewCount, 'отзыв', 'отзыва', 'отзывов');

    return `${reviewCount} ${pluralText}`;
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
