<script setup lang="ts">
const navLinks = ref([
  'works',
  'about',
])
</script>

<template>
  <header>
    <div>
      <NuxtLink to="/">
        hecticme.
      </NuxtLink>
    </div>

    <nav>
      <ul>
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
