<script setup lang="ts">
const navLinks = ref(['works', 'about']);

const router = useRouter();
const currentRouteName = computed(() => router.currentRoute.value.name);
</script>

<template>
  <header class="header">
    <div class="header__title">
      <NuxtLink class="link" to="/">hecticme.</NuxtLink>
    </div>

    <nav class="header__nav-container">
      <ul class="nav-container__nav-links">
        <li
          v-for="(link, index) in navLinks"
          :key="index"
        >
          <NuxtLink
            class="link nav-links__link"
            :class="{ active: currentRouteName === link }"
            :to="`/${link}`"
          >
            {{ link }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;
  padding-block: 1rem;

  &__title {
    font-family: var(--header-font);
    font-size: var(--font-18);
    font-weight: 500;
  }
}

.nav-container__nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style-type: none;
  font-weight: 600;
}

.nav-links__link {
  position: relative;
  font-size: var(--font-14);
  text-transform: uppercase;
  padding-inline: 0.75rem;
  padding-block: 0.5rem;
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: var(--cubic-bezier);

  &::after {
    content: '';
    position: absolute;
    top: 85%;
    inset-inline: 10%;
    height: 2px;
    background-color: black;
    transition-property: inset-inline;
    transition-duration: 150ms;
    transition-timing-function: var(--cubic-bezier);
  }

  &:is(:hover, :focus) {
    &::after {
      inset-inline: 25%;
    }
  }

  &.active {
    background-color: black;
    color: white;

    &::after {
      background-color: white;
    }
  }
}
</style>
