<script setup lang="ts">
defineProps<{
  href: string,
}>()

const router = useRouter()
const currentRouteName = computed(
  () => router.currentRoute.value.name
)
</script>

<template>
<NuxtLink
  class="link link-nav"
  :class="{ active: currentRouteName === href }"
  :to="`/${href}`"
>
  {{ href }}
</NuxtLink>
</template>

<style scoped>
.link-nav {
  position: relative;
  display: flex;
  justify-content: center;
}

.link-nav::after {
  content: '';
  position: absolute;
  top: 120%;
  width: 0.375rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--color-gray-500);
  opacity: 0;
  visibility: hidden;
  transition-property: top, opacity, visibility, background-color;
  transition-duration: 150ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.link-nav:is(:hover, :focus-visible)::after {
  top: 110%;
  opacity: 1;
  visibility: visible;
}

.link-nav.active::after {
  top: 110%;
  opacity: 1;
  visibility: visible;
  background-color: var(--color-teal-600);
}
</style>
