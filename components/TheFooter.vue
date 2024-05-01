<script setup lang="ts">
const username = 'H. Ngọc Minh'
const copyright = computed(() => {
  return `2024-PRESENT © ${username}`
})
</script>

<template>
  <footer class="flex justify-center py-4">
    <p class="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
      <span class="transition-colors duration-300">
        {{ copyright }}
      </span>

      <NuxtLink
        class="font-medium underline underline-offset-2 hover:text-gray-500 transition-colors duration-300 dark:hover:text-gray-100"
        rel="noopener noreferrer"
        target="_blank"
        to="https://creativecommons.org/licenses/by-sa/4.0/"
      >
        CC BY-SA 4.0
      </NuxtLink>
    </p>
  </footer>
</template>
