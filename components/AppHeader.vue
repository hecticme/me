<script setup lang="ts">
const navLinks = ref([
  'works',
  'about',
])
</script>

<template>
  <header class="header">
    <div class="header__title">
      <NuxtLink
        class="link"
        to="/"
      >
        hecticme.
      </NuxtLink>
    </div>

    <nav class="header__nav-container">
      <ul class="nav-container__nav-links">
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

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;
  padding-block: 1rem;
}

.header__title {
  font-family: var(--header-font);
  font-size: var(--font-18);
  font-weight: 500;
}

.nav-container__nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style-type: none;
}
</style>
