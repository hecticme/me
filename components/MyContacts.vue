<script setup lang="ts">
const contracts = [
  {
    href: 'https://github.com/hecticme',
    platformName: 'Github',
    iconName: 'ri:github-fill',
  },
  {
    href: 'https://twitter.com/ngminh_me',
    platformName: 'Twitter',
    iconName: 'ri:twitter-x-fill',
  },
  {
    href: 'https://www.linkedin.com/in/ngminhha/',
    platformName: 'LinkedIn',
    iconName: 'ri:linkedin-fill',
  },
]
</script>

<template>
  <div class="flex gap-2">
    <NuxtLink
      v-for="(contract ,index) of contracts"
      :key="index"
      class="font-medium underline underline-offset-2 flex items-center gap-1 p-1 text-gray-900 bg-transparent hover:bg-gray-200 rounded transition-colors duration-300 dark:text-white dark:hover:bg-gray-700"
      rel="noopener noreferrer"
      target="_blank"
      :to="contract.href"
    >
      <Icon
        class="flex w-4 h-4"
        :name="contract.iconName"
      />

      <span>
        {{ contract.platformName }}
      </span>
    </NuxtLink>
  </div>
</template>
