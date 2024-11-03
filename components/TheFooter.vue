<script setup lang="ts">
const username = 'H. Ngọc Minh'
const copyright = `2024-PRESENT © ${username}`
</script>

<template>
  <footer class="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-300 dark:border-zinc-700 flex justify-center py-4 transition-colors">
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
