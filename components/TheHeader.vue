<script setup lang="ts">
const navLinks = [
  {
    href: '/work',
    title: 'work',
  },
  {
    href: '/blog',
    title: 'blog',
  },
]

const navLinksSidebar = [
  {
    href: '/',
    title: 'home',
  },
  ...navLinks,
]

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
            v-for="{ href, title } of navLinks"
            :key="title"
          >
            <NuxtLink
              active-class="text-gray-900 after:scale-100 dark:text-white"
              :class="[
                'relative flex justify-center text-gray-400 hover:text-gray-700 transition-colors dark:hover:text-gray-200',
                'after:absolute after:top-[98%] after:w-[5px] after:h-[5px] after:rounded-full after:bg-gray-900 after:scale-0 after:transition-transform after: dark:after:bg-white after:pointer-events-none',
              ]"
              :to="href"
            >
              {{ title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <HeaderSocialLinks should-be-hidden-on-mobile />

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
              <Icon name="ph:x-bold" />
            </button>

            <nav>
              <ul class="flex flex-col items-center gap-6 uppercase">
                <li
                  v-for="{ href, title } of navLinksSidebar"
                  :key="title"
                >
                  <NuxtLink
                    active-class="text-gray-900 after:scale-100 dark:text-white"
                    class="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    :to="href"
                  >
                    {{ title }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>

            <HeaderSocialLinks />
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
