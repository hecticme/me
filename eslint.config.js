import pluginVue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'
import pluginStylistic from '@stylistic/eslint-plugin'
import tsEslint from 'typescript-eslint'

const GLOB_JS = '**/*.{js,jsx,mjs,cjs}'
const GLOB_TS = '**/*.{ts,tsx,mts,cts}'
const GLOB_VUE = '**/*.vue'

export default tsEslint.config(
  {
    files: [
      GLOB_JS,
      GLOB_TS,
      GLOB_VUE,
    ],
    plugins: {
      '@stylistic': pluginStylistic,
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
    rules: {
      '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
      ],
      '@stylistic/indent': [
        'error',
        2,
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      '@stylistic/semi': [
        'error',
        'never',
      ],
      '@stylistic/space-before-function-paren': [
        'error',
        'always',
      ],
    },
  },
  ...pluginVue.configs['flat/recommended'],
  {
    files: [
      GLOB_VUE,
    ],
    rules: {
      'vue/html-indent': [
        'error',
        2,
      ],
    },
  },
)
