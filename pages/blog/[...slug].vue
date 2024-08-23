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
      <NuxtLink
        class="
          flex items-center gap-1 hover:gap-2
          text-sm font-semibold
          text-gray-500 hover:text-gray-900 dark:hover:text-white
          transition-all
        "
        to="/blog"
      >
        <Icon name="solar:arrow-left-line-duotone" />

        See all posts
      </NuxtLink>

      <h2 class="mt-6 font-semibold text-3xl">
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

    <NuxtLink
      class="
        mt-16
        inline-block
        text-sm font-mono
        text-gray-500 hover:text-gray-900 dark:hover:text-white
        transition-colors
      "
      to="/blog"
    >
      $ cd /blog
    </NuxtLink>
  </div>
</template>
