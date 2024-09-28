<template>
    <v-badge v-bind="props" class="ui-badge">
        <slot />

        <template v-if="$slots.badge" #badge>
            <slot name="badge" />
        </template>
    </v-badge>
</template>

<script setup lang="ts">
import type { IProps } from './types';

defineOptions({ name: 'UIBadge' });

const props = withDefaults(defineProps<IProps>(), {
    color: 'primary',
});
</script>

<style lang="scss">
.ui-badge {
    .v-badge__badge {
        padding: 0;

        height: 16px;
        min-width: 16px;

        font-family: 'OpenSans';
        font-size: 11px;
        font-weight: 600;

        border: 1px solid white;
    }
}
</style>
