<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) =>
    pageTitle ? `${pageTitle} - hecticme.` : 'hecticme.',
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <div
    id="app"
    class="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors"
  >
    <TheHeader />

    <main class="py-14 flex-grow">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>

  <div id="teleports" />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from,
.page-leave-to {
  transform: translateY(6px);
  opacity: 0;
}
</style>
