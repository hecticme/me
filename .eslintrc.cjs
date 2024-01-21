module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@stylistic',
    '@typescript-eslint',
  ],
  rules: {
    'no-unexpected-multiline': 'error',
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        enums: 'always-multiline',
        generics: 'never',
        tuples: 'always-multiline',
      },
    ],
    '@stylistic/eol-last': [
      'error',
    ],
    '@stylistic/function-call-spacing': [
      'error',
      'never',
    ],
    '@stylistic/indent': [
      'error',
      2,
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          'index',
        ],
      },
    ],
    '@stylistic/no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
        exceptions: {
          Property: true,
        },
      },
    ],
    '@stylistic/no-tabs': [
      'error',
    ],
    '@stylistic/no-trailing-spaces': [
      'error',
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
    '@stylistic/quote-props': [
      'error',
      'as-needed',
    ],
    '@stylistic/semi': [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'never',
      },
    ],
    '@stylistic/space-before-function-paren': [
      'error',
      'always',
    ],
  },
}
