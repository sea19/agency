// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Агенство',
        },
    },

    modules: [
        '@nuxt/eslint',
        '@vueuse/nuxt',
        'vuetify-nuxt-module',
        'dayjs-nuxt',
        '@nuxt/icon',
        '@pinia/nuxt',
    ],

    css: ['~/assets/scss/main.scss'],

    nitro: {
        storage: {
            files: {
                driver: 'fs',
                base: './server/static',
            },
        },
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
            },
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    additionalData: '@use "~/assets/scss/variables.scss" as *;',
                },
            },
        },
    },

    vuetify: {
        vuetifyOptions: {
            theme: {
                defaultTheme: 'customTheme',

                themes: {
                    customTheme: {
                        dark: false,
                        colors: {
                            primary: '#337566',
                        },
                    },
                },
            },
        },
    },

    icon: {
        customCollections: [
            {
                prefix: 'icon',
                dir: './assets/icons',
            },
        ],
    },

    dayjs: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
        plugins: ['customParseFormat'],
    },
});
