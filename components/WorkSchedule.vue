<template>
    <section class="work-schedule">
        <h2 class="work-schedule__title">Режим работы</h2>

        <p v-if="startTime || finishTime">
            <Icon name="icon:arrow-bottom" size="24px" class="work-schedule__arrow-icon" />

            <span>Сегодня</span>
            <span v-if="startTime"> c {{ startTime }}</span>
            <span v-if="finishTime"> до {{ finishTime }}</span>
        </p>

        <p v-else>Не указан</p>
    </section>
</template>

<script setup lang="ts">
interface IProps {
    startTime?: string;
    finishTime?: string;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.work-schedule {
    position: relative;

    padding: 20px;

    border-radius: 16px;

    background: $c-gray-1;
    opacity: 0.3;

    &__title {
        margin-bottom: 8px;
    }

    &__arrow-icon {
        position: absolute;
        top: 20px;
        right: 20px;
    }
}
</style>
