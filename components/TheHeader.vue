<script setup lang="ts">
const navLinks = ref([
  'work',
  'about',
])

const socialLinks = ref([
  {
    href: 'https://github.com/hecticme',
    icon: 'mingcute:github-line',
  },
  {
    href: 'https://twitter.com/ngminh_me',
    icon: 'mingcute:twitter-line',
  },
])
</script>

<template>
  <header class="sticky bg-white flex justify-between items-center top-0 px-8 py-1 border-b border-neutral-900 h-header-full">
    <div>
      <NuxtLink
        class="font-semibold"
        to="/"
      >
        me.
      </NuxtLink>
    </div>

    <nav>
      <ul class="flex gap-8 uppercase">
        <li
          v-for="(link, index) in navLinks"
          :key="index"
        >
          <NuxtLink :to="link">
            {{ link }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <ul class="flex gap-3 items-center">
      <li
        v-for="(link, index) of socialLinks"
        :key="index"
      >
        <NuxtLink
          class="rounded-full flex justify-center items-center aspect-square p-2 transition-colors duration-500 hover:bg-gray-200"
          :to="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon :name="link.icon" />
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>
