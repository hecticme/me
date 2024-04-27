<script setup>
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
      :name="iconThemeName"
    />
  </button>
</template>
