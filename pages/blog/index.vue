<script setup lang="ts">
useSeoMeta({
  title: 'Blog',
})

const { data: blogs } = await useAsyncData(
  'blogs',
  () => queryCollection('blog')
    .order('date', 'DESC')
    .select('title', 'date', 'path')
    .all()
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
      To remember who I was.
    </p>

    <ul class="mt-10 flex flex-col gap-6">
      <li
        v-for="blog of blogs"
        :key="blog.path"
      >
        <NuxtLink
          class="
            inline-flex items-center gap-4
            max-w-full
            border-b-2 border-zinc-500 hover:border-zinc-800 dark:hover:border-zinc-200
            transition-colors
          "
          :title="blog.title"
          :to="blog.path"
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
