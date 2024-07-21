<script setup lang="ts">

</script>

<template>
  <NuxtLink
    :class="[
      'flex font-medium transition-colors text-gray-400 hover:text-gray-700 dark:hover:text-gray-200',
      {
        'text-gray-900 dark:text-white': $route.name === 'index',
      }
    ]"
    to="/"
  >
    <p>hectic</p>

    <p>
      me.
    </p>
  </NuxtLink>
</template>
