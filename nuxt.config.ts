// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', 'vuetify-nuxt-module'],

    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
            },
        },
    },
});
