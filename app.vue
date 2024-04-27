<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) =>
    pageTitle ? `${pageTitle} - hecticme.` : 'hecticme.',
})
</script>

<template>
  <div
    id="app"
    class="min-h-screen flex flex-col"
  >
    <TheHeader />

    <main class="py-10 flex-grow">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>

  <div id="teleports" />
</template>
