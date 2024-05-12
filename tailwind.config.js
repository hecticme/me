import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'selector',
  theme: {
    transitionDuration: {
      ...defaultTheme.transitionDuration,
      DEFAULT: '300ms',
    },

    // Extend base theme.
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      spacing: {
        'header-full': '5rem',
        'header-less': '4rem',
      },
    },
  },
  plugins: [],
}
