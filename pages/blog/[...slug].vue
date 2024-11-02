<script setup lang="ts">
const route = useRoute()

const { data: blogDetails } = await useAsyncData(
  route.path,
  () => queryContent(route.path)
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
          text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200
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
          text-zinc-700 dark:text-zinc-300
          transition-colors
        "
        :datetime="blogDetails?.date"
      >
        {{ formatDate(new Date(blogDetails?.date)) }}
      </time>
    </section>

    <article :class="$style.blog">
      <ContentDoc class="mt-8 flex flex-col gap-6 leading-relaxed" />
    </article>

    <NuxtLink
      class="
        mt-16
        inline-block
        text-sm font-mono
        text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200
        transition-colors
      "
      to="/blog"
    >
      $ cd /blog
    </NuxtLink>
  </div>
</template>

<style module>
.blog {
  a {
    @apply font-medium text-zinc-800 underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-900 transition-colors;
  }

  blockquote {
    @apply border-l-2 border-zinc-500 pl-4 py-1;
  }
}

:global(.dark) .blog {
  a {
    @apply text-zinc-200 hover:decoration-white;
  }
}
</style>
