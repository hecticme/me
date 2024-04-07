<script setup>
import { computed } from 'vue'

// Import components
import { Icon } from '@iconify/vue'

const iconThemeName = computed(() => theme.isDarkTheme
  ? 'material-symbols:dark-mode-outline-rounded'
  : 'material-symbols:sunny-outline-rounded'
)

const theme = useThemeStore()
</script>

<template>
  <button
    @click="theme.toggleDarkTheme"
  >
    <Icon
      :icon="iconThemeName"
    />
  </button>
</template>
