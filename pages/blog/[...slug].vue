<script setup lang="ts">
const route = useRoute()

const { data: blogDetails } = await useAsyncData(
  route.fullPath,
  () => queryContent(route.fullPath)
    .only(['title', 'date'])
    .findOne()
)

const { format: formatDate } = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: '2-digit',
  year: 'numeric',
})
</script>

<template>
  <div class="body-container">
    <section>
      <h2 class="font-semibold text-3xl">
        {{ blogDetails?.title }}
      </h2>

      <time
        class="
          mt-2
          text-xs
          text-gray-700 dark:text-gray-300
          transition-colors
        "
        :datetime="blogDetails?.date"
      >
        {{ formatDate(new Date(blogDetails?.date)) }}
      </time>
    </section>

    <ContentDoc class="mt-8 leading-relaxed" />
  </div>
</template>
