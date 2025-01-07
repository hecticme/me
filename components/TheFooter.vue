<script setup lang="ts">
const username = 'H. Ngọc Minh'
const copyright = `2024-PRESENT © ${username}`
</script>

<template>
  <footer class="flex justify-center py-4">
    <p class="flex gap-2 text-sm text-zinc-500">
      <span class="transition-colors">
        {{ copyright }}
      </span>

      <NuxtLink
        class="font-medium underline underline-offset-2 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
        rel="noopener noreferrer"
        target="_blank"
        to="https://creativecommons.org/licenses/by-sa/4.0/"
      >
        CC BY-SA 4.0
      </NuxtLink>
    </p>
  </footer>
</template>
