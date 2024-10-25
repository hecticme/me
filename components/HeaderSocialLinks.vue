<script setup lang="ts">
const props = defineProps<{
  shouldBeHiddenOnMobile?: boolean
}>()

const socialLinks = ref([
  {
    href: 'https://github.com/hecticme',
    icon: 'ph:github-logo-duotone',
  },
])

</script>

<template>
  <ul
    :class="[
      props.shouldBeHiddenOnMobile ? 'hidden md:flex' : 'flex',
      'gap-1 items-center',
    ]"
  >
    <li
      v-for="(link, index) of socialLinks"
      :key="index"
    >
      <NuxtLink
        class="text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex justify-center items-center aspect-square p-2 transition-colors"
        rel="noopener noreferrer"
        target="_blank"
        :to="link.href"
      >
        <Icon :name="link.icon" />
      </NuxtLink>
    </li>

    <li>
      <ColorModeToggler />
    </li>
  </ul>
</template>
