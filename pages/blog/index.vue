<script setup lang="ts">
const { data: blogs } = await useAsyncData(
  'blogs',
  () => queryContent('blog')
    .only(['title', 'date', '_path'])
    .find()
    .then(result => result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
)

const { format: formatDate } = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
})
</script>

<template>
  <div class="body-container">
    <h2 class="font-semibold text-xl tracking-tight">
      I write some of my thoughts here.
    </h2>

    <p class="mt-6">
      To remember who I was ✍️.
    </p>

    <ul class="mt-10 flex flex-col gap-6">
      <li
        v-for="(blog, index) of blogs"
        :key="index"
      >
        <NuxtLink
          class="
            flex items-center gap-4
            w-fit
            border-b-2 border-gray-400 hover:border-gray-700 dark:hover:border-gray-200
            transition-colors
          "
          :to="blog._path"
        >
          <span class="font-semibold">
            {{ blog.title }}
          </span>

          <span class="text-sm text-gray-700 dark:text-gray-200 transition-colors">
            {{ formatDate(new Date(blog.date)) }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
