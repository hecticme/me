<script setup lang="ts">
const navLinks = [
  {
    href: '/',
    title: 'home',
  },
  {
    href: '/work',
    title: 'work',
  },
  {
    href: '/blog',
    title: 'blog',
  },
]
</script>

<template>
  <header class="pt-6">
    <div class="flex justify-between items-center min-h-16 body-container">
      <nav>
        <ul class="flex gap-5 sm:gap-6 md:gap-8 uppercase">
          <li
            v-for="{ href, title } of navLinks"
            :key="title"
          >
            <NuxtLink
              active-class="text-zinc-800 dark:text-zinc-200"
              class="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              :to="href"
            >
              {{ title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <ColorModeToggler />
    </div>
  </header>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
