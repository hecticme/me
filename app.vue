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

    <main class="pt-8 pb-14 flex-grow">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<style>
.page-enter-active {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-from {
  transform: translateY(-6px);
}
</style>
