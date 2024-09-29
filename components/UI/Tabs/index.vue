<template>
    <v-tabs v-model="$value" class="ui-tabs">
        <v-tab
            v-for="{ value, label, text } in tabs"
            :key="unref(value)"
            :value="value"
            class="ui-tab"
        >
            <div class="ui-tab__content">
                <span>{{ label }}</span>
                <span v-if="text" class="ui-tab__text">{{ text }}</span>
            </div>
        </v-tab>
    </v-tabs>
</template>

<script setup lang="ts">
import type { ModelValue, IProps } from './types';

defineOptions({ name: 'UITabs' });
defineProps<IProps>();

const $value = defineModel<ModelValue>();
</script>

<style lang="scss">
.ui-tabs {
    .v-btn {
        font-size: 15px;
        font-weight: 500;
        text-transform: none;
        letter-spacing: normal;
    }

    .v-slide-group__content {
        display: flex;
        gap: 8px;
    }

    &.v-tabs--density-default {
        --v-tabs-height: 40px;
    }
}

.ui-tab {
    min-width: auto !important;

    padding: 8px 12px;

    background: $c-gray-2;

    border: 1px solid transparent;
    border-radius: 12px !important;

    &__content {
        display: flex;
        gap: 4px;
    }

    &__label {

    }

    &__text {
        color: $c-gray-4;
    }

    &.v-tab--selected {
        border-color: $c-black-1;
        transition: border-color 150ms;

        .v-tab__slider {
            display: none;
        }
    }
}
</style>
