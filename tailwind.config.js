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
        mono: ['DM Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
