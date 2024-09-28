<template>
    <section class="agent-card">
        <img :src="imageUrl" :alt="fullName" class="agent-card__image">

        <header class="card-header">
            <h4 class="card-header__name">{{ fullName }}</h4>
            <RatingInfo :score="score" :is-verified="isVerified" :review-count="reviewCount" />
        </header>

        <p class="agent-card__description">{{ description }}</p>
    </section>
</template>

<script setup lang="ts">
import type { IAgent } from '~/types/entities';

type PropKeys =
    'firstName' |
    'lastName' |
    'imageUrl' |
    'description' |
    'score' |
    'reviewCount' |
    'isVerified';

type Props = Pick<IAgent, PropKeys>;

const props = defineProps<Props>();

const fullName = computed(() => `${props.firstName} ${props.lastName}`);
</script>

<style scoped lang="scss">
.agent-card {
    display: grid;
    grid-template-columns: 140px auto;
    grid-template-rows: min-content auto;
    gap: 12px 20px;

    overflow: hidden;

    max-width: 560px;
    width: 100%;

    padding: 20px;

    border-radius: 20px;

    background: $c-gray-1;

    &__image {
        grid-row-start: span 2;

        width: 100%;
        height: 100%;

        object-fit: cover;

        border-radius: 20px;
    }

    &__description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
}

.card-header {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &__name {
        font-size: 24px;
        font-weight: 600;
        line-height: 28px;
    }
}

@media screen and (max-width: 768px) {
    .agent-card {
        grid-template-columns: 48px auto;
        gap: 8px 12px;

        &__image {
            grid-row-start: auto;

            height: 48px;
            width: 48px;

            border-radius: 9.6px;
        }

        &__description {
            grid-column-start: span 2;

            -webkit-line-clamp: 4;
        }
    }

    .card-header {
        &__name {
            font-size: 20px;
            line-height: 24px;
        }
    }
}
</style>
