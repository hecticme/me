<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) =>
    pageTitle ? `${pageTitle} - hecticme.` : 'hecticme.',
});
</script>

<template>
  <AppHeader />

  <NuxtPage />
</template>
