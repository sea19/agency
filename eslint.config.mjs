// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    // Your custom configs here
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
        rules: {
            'vue/singleline-html-element-content-newline': 'off',
            'vue/no-multiple-template-root': 'off',
            'vue/attributes-order': ['error', {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: false,
            }],

            'vue/html-self-closing': ['error', {
                html: {
                    void: 'never',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            }],

            'vue/max-attributes-per-line': ['error', {
                singleline: 10,
                multiline: {
                    max: 1,
                },
            }],

            '@stylistic/max-len': ['error', {
                code: 120,
            }],
        },
    },
);
