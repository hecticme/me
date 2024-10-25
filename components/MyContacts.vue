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
  <div class="flex flex-col gap-1 w-fit">
    <NuxtLink
      v-for="(contract ,index) of contracts"
      :key="index"
      class="font-medium underline underline-offset-2 flex items-center gap-1 p-1 text-zinc-900 bg-transparent hover:bg-zinc-200 rounded transition-colors dark:text-white dark:hover:bg-zinc-700"
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
