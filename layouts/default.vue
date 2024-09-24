<template>
    <div class="page">
        <div class="page-block page-block__header">
            <LayoutHeader class="page-block__content" />
        </div>

        <div class="page-block page-block__main">
            <main class="page-block__content page-main">
                <LayoutCompanyInfo />
                <slot />
            </main>
        </div>

        <div class="page-block page-block__footer">
            <LayoutFooter class="page-block__content" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page {
    height: 100vh;

    display: flex;
    flex-direction: column;
}

.page-block {
    display: flex;
    justify-content: center;

    &__content {
        max-width: 1809px;
        width: 100%;

        padding: 0 32px;
    }

    &__header {
        height: 64px;

        background: $c-orange;
    }

    &__main {
        height: 100%;
    }

    &__footer {
        background: $c-gray-1;
        border-top: 1px solid $c-gray-3;
    }
}

@media screen and (max-width: 950px) {
    .page-block {
        &__content {
            padding: 0 16px;
        }
    }
}
</style>
