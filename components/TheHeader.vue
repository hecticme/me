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

const shouldShowSidebar = ref(false)

// Close sidebar even if user goes to the same route.
const router = useRouter()
router.afterEach(() => {
  shouldShowSidebar.value = false
})
</script>

<template>
  <header class="sticky bg-gray-50 dark:bg-gray-950 top-0 border-b border-gray-300 dark:border-gray-700 transition-colors">
    <div class="flex justify-between items-center min-h-16 body-container">
      <div>
        <TheLogo />
      </div>

      <nav class="hidden md:block">
        <ul class="flex gap-8 uppercase">
          <li
            v-for="(link, index) in navLinks"
            :key="index"
          >
            <NuxtLink
              active-class="text-gray-900 after:scale-100 dark:text-white"
              :class="[
                'relative flex justify-center text-gray-400 hover:text-gray-700 transition-colors dark:hover:text-gray-200',
                'after:absolute after:top-[98%] after:w-[5px] after:h-[5px] after:rounded-full after:bg-gray-900 after:scale-0 after:transition-transform after: dark:after:bg-white after:pointer-events-none',
              ]"
              :to="link"
            >
              {{ link }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <ul class="hidden md:flex gap-1 items-center">
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

      <button
        class="flex md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        @click="shouldShowSidebar = true"
      >
        <Icon name="solar:hamburger-menu-line-duotone" />
      </button>

      <Teleport to="body">
        <Transition>
          <div
            v-if="shouldShowSidebar"
            class="fixed inset-0 z-10 bg-gray-50 dark:bg-gray-950 flex flex-col justify-center items-center gap-10 transition-colors text-gray-900 dark:text-white"
          >
            <button
              class="absolute top-6 right-6 flex p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              @click="shouldShowSidebar = false"
            >
              <Icon name="mingcute:close-fill" />
            </button>

            <nav>
              <ul class="flex flex-col items-center gap-6 uppercase">
                <li
                  v-for="(link, index) in navLinks"
                  :key="index"
                >
                  <NuxtLink
                    active-class="text-gray-900 after:scale-100 dark:text-white"
                    class="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    :to="link"
                  >
                    {{ link }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>

            <ul class="flex gap-1 items-center">
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
        </Transition>
      </Teleport>
    </div>
  </header>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
