<script setup lang="ts">
useSeoMeta({
  title: 'About',
})
</script>

<template>
  <section class="body-container flex gap-10">
    <div class="flex-1">
      <h2 class="font-semibold text-xl tracking-tight">
        About me
      </h2>

      <p class="mt-4">
        Some description about me
      </p>
    </div>

    <div class="bg-gray-100 rounded-lg flex-1 h-96" />
  </section>

  <section class="mt-20 body-container">
    <h2 class="font-semibold text-xl tracking-tight">
      Work experience
    </h2>

    <div class="mt-4">
      <p>2022</p>
    </div>
  </section>

  <section class="mt-10 py-10 text-white bg-gray-900">
    <div class="body-container flex flex-col items-center">
      <p>
        I'm interested in Open-source.
      </p>

      <button class="mt-4 text-gray-900 bg-white rounded px-3 py-1 font-semibold">
        Contact me
      </button>
    </div>
  </section>
</template>
