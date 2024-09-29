<template>
    <footer class="page-footer">
        <nav>
            <ul class="sitemap">
                <li class="sitemap__element copyright">© Annonce 2023</li>

                <li class="sitemap__element">
                    <nuxt-link to="/">Документы</nuxt-link>
                </li>

                <li class="sitemap__element">
                    <nuxt-link to="/">О компании</nuxt-link>
                </li>

                <li class="sitemap__element sitemap__element--mobile">
                    <nuxt-link to="/">Продавцам</nuxt-link>
                </li>

                <li class="sitemap__element sitemap__element--mobile">
                    <nuxt-link to="/">Покупателям</nuxt-link>
                </li>

                <li class="sitemap__element sitemap__element--mobile">
                    <nuxt-link to="/">Разместить объявление</nuxt-link>
                </li>

                <li class="sitemap__element sitemap__element--mobile">
                    <button class="language-button">
                        <icon name="icon:flag" size="18px" />
                        <span>Русский</span>
                    </button>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page-footer {
    margin: 24px 0 40px 0;
}

.sitemap {
    display: flex;
    gap: 20px;

    color: $c-gray-4;
    font-weight: 500;

    &__element {
        &--mobile {
            display: none;
        }
    }
}

.copyright,
.language-button {
    color: $c-black-1;
}

.language-button {
    display: flex;
    gap: 6px;
}

@media screen and (max-width: 960px) {
    .sitemap {
        flex-direction: column;

        &__element {
            &--mobile {
                display: block;
            }
        }
    }
}
</style>
