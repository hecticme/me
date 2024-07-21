<script setup lang="ts">
const myEmail = 'mymail@mail.com'

const shouldShowCopyIndicator = ref(false)
let copyIndicatorTimeout: NodeJS.Timeout | number | null = null

function handleCopy () {
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
      class="underline underline-offset-2 decoration-gray-700"
      @click="handleCopy"
    >
      {{ myEmail }}
    </button>

    <div
      v-if="shouldShowCopyIndicator"
      class="absolute bottom-[115%] flex justify-center items-center text-xs font-medium px-2 py-1 rounded bg-gray-100 border border-gray-300"
    >
      <p>Copied!</p>
    </div>
  </div>
</template>
