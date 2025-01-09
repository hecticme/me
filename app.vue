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

    <main class="pt-8 pb-14 flex-grow page-transition">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<style>
.page-transition * {
  animation: enter 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
