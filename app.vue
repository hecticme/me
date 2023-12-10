<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) =>
    pageTitle ? `${pageTitle} - Hecticme.` : 'Hecticme.',
});
</script>

<template>
  <AppHeader />

  <NuxtPage />
</template>
