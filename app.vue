<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) =>
    pageTitle ? `${pageTitle} • hecticme.` : 'hecticme.',
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
    class="min-h-screen flex flex-col bg-white text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 transition-colors"
  >
    <TheHeader />

    <main class="py-14 flex-grow">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
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
