<script setup lang="ts">
useSeoMeta({
  title: 'Blog',
})

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
    <h2 class="font-semibold text-2xl tracking-tight">
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
            max-w-full
            border-b-2 border-zinc-500 hover:border-zinc-800 dark:hover:border-zinc-200
            transition-colors
          "
          :title="blog.title"
          :to="blog._path"
        >
          <span class="font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            {{ blog.title }}
          </span>

          <span class="text-sm whitespace-nowrap text-zinc-700 dark:text-zinc-200 transition-colors">
            {{ formatDate(new Date(blog.date)) }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
