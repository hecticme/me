<script setup lang="ts">
const contracts = [
  {
    href: 'https://github.com/hecticme',
    platformName: 'Github',
    iconName: 'ph:github-logo-duotone',
  },
  {
    href: 'https://twitter.com/ngminh_me',
    platformName: 'Twitter',
    iconName: 'ph:x-logo-duotone',
  },
  {
    href: 'https://www.linkedin.com/in/ngminhha/',
    platformName: 'LinkedIn',
    iconName: 'ph:linkedin-logo-duotone',
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <NuxtLink
      v-for="(contract, index) of contracts"
      :key="index"
      class="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
      rel="noopener noreferrer"
      target="_blank"
      :to="contract.href"
    >
      <Icon
        class="flex w-5 h-5"
        :name="contract.iconName"
      />

      <span>
        {{ contract.platformName }}
      </span>
    </NuxtLink>
  </div>
</template>
