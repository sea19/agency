<template>
    <v-btn v-bind="props" class="ui-button">
        <slot />
    </v-btn>
</template>

<script setup lang="ts">
import type { IProps, VBtnSlots } from './types';

defineOptions({ name: 'UIButton' });

const props = withDefaults(defineProps<IProps>(), {
    color: 'primary',
    size: 'medium',
    variant: 'flat',
    rounded: 'medium',
});

defineSlots<VBtnSlots>();

const buttonPadding = computed(() => {
    switch (props.size) {
        case 'large':
            return '16px 20px';
        default:
            return '8px 12px';
    }
});

const buttonHeight = computed(() => {
    switch (props.size) {
        case 'large':
            return '56px';
        default:
            return '40px';
    }
});

const borderRadius = computed(() => {
    switch (props.rounded) {
        case 'large':
            return '24px';
        default:
            return '12px';
    }
});
</script>

<style lang="scss">
.ui-button.v-btn {
    height: v-bind(buttonHeight) !important;
    padding: v-bind(buttonPadding);
    border-radius: v-bind(borderRadius);

    text-transform: none;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: normal;
}
</style>
