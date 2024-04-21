<script setup lang="ts">
const navLinks = ref([
  'works',
  'about',
])
</script>

<template>
  <header class="sticky bg-white flex justify-between items-center top-0 px-8 py-1 border-b border-neutral-900 h-header-full">
    <div>
      <NuxtLink
        class="font-semibold"
        to="/"
      >
        me.
      </NuxtLink>
    </div>

    <nav>
      <ul class="flex gap-4">
        <li
          v-for="(link, index) in navLinks"
          :key="index"
        >
          <NuxtLink :to="link">
            {{ link }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
