<template>
    <v-select v-model="$value" v-bind="props" menu-icon="" class="ui-select">
        <template #item="itemProps">
            <slot name="item" v-bind="itemProps" />
        </template>

        <template #selection="selectionProps">
            <slot name="selection" v-bind="selectionProps" />
        </template>

        <template #prepend="prependProps">
            <slot name="prepend" v-bind="prependProps" />
        </template>

        <template #append="appendProps">
            <slot name="append" v-bind="appendProps" />
        </template>

        <template #append-inner="appendInnerProps">
            <slot name="append-inner" v-bind="appendInnerProps">
                <div
                    :class="[
                        'ui-select__append-inner-icon',
                        { 'ui-select__append-inner-icon--active': unref(appendInnerProps.isActive) },
                    ]"
                >
                    <Icon name="icon:dropdown" size="24px" />
                </div>
            </slot>
        </template>
    </v-select>
</template>

<script setup lang="ts">
import type { ModelValue, IProps } from './types';

const props = withDefaults(defineProps<IProps>(), {
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

        transition: transform 200ms;

        &--active {
            transform: rotate(180deg);
        }
    }
}
</style>
