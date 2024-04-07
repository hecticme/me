<script setup lang="ts">
defineProps<{
  href: string,
}>()

const router = useRouter()
const currentRouteName = computed(
  () => router.currentRoute.value.name,
)
</script>

<template>
  <NuxtLink :to="`/${href}`">
    {{ href }}
  </NuxtLink>
</template>
