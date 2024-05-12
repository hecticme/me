<script setup lang="ts">
const colorMode = useColorMode()

function changeColorMode () {
  if (colorMode.value === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}
</script>

<template>
  <button
    class="text-gray-900 bg-transparent hover:bg-gray-200 p-2 rounded-full transition-colors dark:text-white dark:hover:bg-gray-700"
    @click="changeColorMode"
  >
    <span class="flex dark:hidden items-center">
      <Icon name="ph:sun-duotone" />
    </span>

    <span class="hidden dark:flex dark:items-center">
      <Icon name="ph:moon-duotone" />
    </span>
  </button>
</template>
