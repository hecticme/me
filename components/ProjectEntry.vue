<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  href: string
}>()
</script>

<template>
  <div class="grid rounded text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
    <div class="col-span-full row-span-full p-4 flex flex-col gap-2">
      <h3 class="font-semibold">
        {{ props.title }}
      </h3>

      <p class="text-sm">
        {{ props.description }}
      </p>
    </div>

    <NuxtLink
      class="col-span-full row-span-full"
      rel="noopener noreferrer"
      target="_blank"
      :to="props.href"
    />
  </div>
</template>
