<template>
    <v-select v-model="$value" v-bind="props" menu-icon="" class="ui-select">
        <template #item="itemProps">
            <slot name="item" v-bind="itemProps">
                <div class="ui-select-item">
                    <v-divider v-if="itemProps.item.raw.type === 'divider'" />

                    <v-list-subheader v-else-if="itemProps.item.raw.type === 'subheader'">
                        <span class="ui-select-item__subheader">{{ itemProps.item.title }}</span>
                    </v-list-subheader>

                    <v-list-item
                        v-else
                        v-bind="itemProps.props"
                        :disabled="itemProps.item.raw.disabled"
                        class="ui-select-item__item"
                    />
                </div>
            </slot>
        </template>

        <template v-if="$slots.selection" #selection="selectionProps">
            <slot name="selection" v-bind="selectionProps" />
        </template>

        <template v-if="$slots.prepend" #prepend="prependProps">
            <slot name="prepend" v-bind="prependProps" />
        </template>

        <template v-if="$slots.append" #append="appendProps">
            <slot name="append" v-bind="appendProps" />
        </template>

        <template #append-inner="appendInnerProps">
            <slot name="append-inner" v-bind="appendInnerProps">
                <div
                    :class="[
                        'ui-select__append-inner-icon',
                        { 'ui-select__append-inner-icon--focused': unref(appendInnerProps.isFocused) },
                    ]"
                >
                    <Icon name="icon:arrow-top" size="24px" />
                </div>
            </slot>
        </template>
    </v-select>
</template>

<script setup lang="ts">
import type { ModelValue, IProps } from './types';

const props = withDefaults(defineProps<IProps>(), {
    variant: 'solo',
    noDataText: 'Список пуст',
});

const $value = defineModel<ModelValue>();
</script>

<style lang="scss">
.ui-select {
    &__append-inner-icon {
        display: flex;
        justify-content: center;
        align-items: center;

        color: $c-gray-4;

        transform: rotate(180deg);
        transition: transform 200ms;

        &--focused {
            transform: rotate(0deg);
        }
    }

    .v-field--variant-solo {
        border: 1px solid $c-gray-7;
        border-radius: 12px;

        background: $c-gray-6;
        box-shadow: none;
    }
}

.ui-select-item {
    .v-list-item-title {
        font-size: 15px;
        color: $c-black-1;
    }

    .v-list-item__content {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    &__subheader {
        font-size: 13px;
        font-weight: 500;
    }
}
</style>
