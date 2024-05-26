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
  <header class="sticky bg-white dark:bg-gray-900 top-0 border-b border-gray-900 dark:border-gray-700 transition-colors">
    <div class="flex justify-between items-center h-header-full body-container">
      <div>
        <NuxtLink
          class="font-semibold text-gray-900 dark:text-white transition-colors"
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
            <NuxtLink
              active-class="text-gray-900 after:scale-100 dark:text-white"
              :class="[
                'relative flex justify-center text-gray-400 hover:text-gray-700 transition-colors dark:hover:text-gray-200',
                'after:absolute after:top-[110%] after:w-[5px] after:h-[5px] after:rounded-full after:bg-gray-900 after:scale-0 after:transition-transform after: dark:after:bg-white',
              ]"
              :to="link"
            >
              {{ link }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <ul class="flex gap-2 items-center">
        <li
          v-for="(link, index) of socialLinks"
          :key="index"
        >
          <NuxtLink
            class="text-gray-900 rounded-lg flex justify-center items-center aspect-square p-2 transition-colors hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
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
    </div>
  </header>
</template>
