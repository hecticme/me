<script setup lang="ts">
const myEmail = 'mymail@mail.com'

const shouldShowCopyIndicator = ref(false)
let copyIndicatorTimeout: NodeJS.Timeout | number | null = null

function handleCopy() {
  navigator.clipboard.writeText(myEmail)
  shouldShowCopyIndicator.value = true

  if (copyIndicatorTimeout !== null) {
    clearTimeout(copyIndicatorTimeout)
    copyIndicatorTimeout = null
  }

  copyIndicatorTimeout = setTimeout(() => {
    shouldShowCopyIndicator.value = false
  }, 2000)
}
</script>

<template>
  <div class="relative flex justify-center">
    <button
      class="underline underline-offset-2 decoration-zinc-700"
      @click="handleCopy"
    >
      {{ myEmail }}
    </button>

    <Transition>
      <div
        v-if="shouldShowCopyIndicator"
        class="absolute bottom-[115%] flex justify-center items-center text-xs font-medium px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 transition-colors"
      >
        <p>Copied!</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition:
    opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(2px) scale(95%);
}
</style>
