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
  <header class="sticky bg-white top-0 border-b border-gray-900">
    <div class="flex justify-between items-center h-header-full body-container">
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
            <NuxtLink
              active-class="text-gray-900 after:scale-100"
              :class="[
                'relative flex justify-center text-gray-400 hover:text-gray-700 transition-colors duration-300',
                'after:absolute after:top-[110%] after:w-[5px] after:h-[5px] after:rounded-full after:bg-gray-900 after:scale-0 after:transition-transform after:duration-300',
              ]"
              :to="link"
            >
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
            class="rounded-full flex justify-center items-center aspect-square p-2 transition-colors duration-300 hover:bg-gray-200"
            rel="noopener noreferrer"
            target="_blank"
            :to="link.href"
          >
            <Icon :name="link.icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
