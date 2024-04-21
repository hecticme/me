<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) =>
    pageTitle ? `${pageTitle} - hecticme.` : 'hecticme.',
})
</script>

<template>
  <TheHeader />

  <main class="py-10">
    <NuxtPage />
  </main>
</template>
