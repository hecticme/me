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
]
</script>

<template>
  <div class="flex gap-2">
    <NuxtLink
      v-for="(contract ,index) of contracts"
      :key="index"
      :to="contract.href"
      target="_blank"
      rel="noopener noreferrer"
      class="font-medium underline underline-offset-2 flex items-center gap-1 p-1 bg-white hover:bg-gray-200 rounded transition-colors duration-500"
    >
      <Icon
        :name="contract.iconName"
        class="flex w-4 h-4"
      />

      <span>
        {{ contract.platformName }}
      </span>
    </NuxtLink>
  </div>
</template>
