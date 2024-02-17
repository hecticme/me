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
  class="link nav-links__link"
  :class="{ active: currentRouteName === href }"
  :to="`/${href}`"
>
  {{ href }}
</NuxtLink>
</template>

<style scoped>

</style>
