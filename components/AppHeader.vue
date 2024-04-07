<script setup lang="ts">
const navLinks = ref([
  'works',
  'about',
])
</script>

<template>
  <header class="sticky bg-white shadow-outline flex justify-between top-5 mx-auto px-8 py-3 max-w-lg rounded-full">
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
          <HeaderNavLink :href="link" />
        </li>
      </ul>
    </nav>
  </header>
</template>
