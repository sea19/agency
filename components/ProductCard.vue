<template>
    <section class="product-card">
        <div v-if="!isHidden(status)" class="product-card__badges">
            <CardBadge>
                <Icon name="icon:eye" size="24px" />
                <span>{{ views }} </span>
            </CardBadge>

            <CardBadge v-if="publicationDate">
                <Icon name="icon:calendar" size="24px" />
                <span>{{ daysFromPublicationText }}</span>
            </CardBadge>
        </div>

        <img :src="imageUrl" :alt="name" class="product-card__image">

        <div class="card-header">
            <h4 v-if="price" class="card-header__price">{{ price.toLocaleString() }} ₽</h4>
            <p class="card-header__name">{{ name }}</p>
        </div>

        <v-divider :thickness="1" class="divider" />

        <div v-if="isHidden(status)" class="card-footer card-footer--hidden">Объявление скрыто</div>
        <div v-else-if="isPromote(status)" class="card-footer card-footer--promote">
            Объявление продвигается
        </div>

        <div v-else class="card-footer card-footer--default">
            <span>Увеличьте количество просмотров</span>
            <UIButton>Продвигать</UIButton>
        </div>
    </section>
</template>

<script setup lang="ts">
import { getNoun } from '~/utils';
import { isHidden, isPromote } from '~/helpers';

import type { IProduct } from '~/types/entities';

type PropKeys =
    'name' |
    'category' |
    'subcategory' |
    'imageUrl' |
    'price' |
    'views' |
    'publicationDate' |
    'status';

type Props = Pick<IProduct, PropKeys>;

const props = defineProps<Props>();

const dayjs = useDayjs();

const daysFromPublication = computed(() => {
    const { publicationDate } = props;
    if (!publicationDate) return;

    return getDaysFrom(publicationDate);
});

const daysFromPublicationText = computed(() => {
    const days = daysFromPublication.value;
    if (!days && days !== 0) return '';

    const pluralText = getNoun(days, 'день', 'дня', 'дней');
    return `${days} ${pluralText}`;
});

function getDaysFrom(publicationDate: string) {
    const parsedDate = dayjs(publicationDate, 'DD.MM.YYYY');
    const currentDate = dayjs();

    return currentDate.diff(parsedDate, 'days');
}
</script>

<style scoped lang="scss">
.product-card {
    position: relative;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    &__image {
        object-fit: cover;

        height: 322px;
        width: 100%;

        border-radius: 20px;
    }

    &__badges {
        position: absolute;
        top: 8px;
        left: 8px;

        display: flex;
        gap: 4px;

        color: $c-gray-1;
    }
}

.card-header {
    margin-top: 16px;

    font-size: 15px;
    font-weight: 500;

    &__price {
        font-size: 17px;
    }

    &__name {
        margin: 12px 0;
    }
}

.card-footer {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 56px;

    font-size: 15px;

    &--default {
        justify-content: space-between;
        align-items: center;
        gap: 4px;

        font-size: 13px;
        color: $c-gray-4;
    }

    &--hidden {
        color: $c-red;
    }

    &--promote {
        color: $c-primary;
    }
}

.divider {
    margin-top: auto;
}
</style>
