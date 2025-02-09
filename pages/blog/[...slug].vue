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
          inline-flex items-center gap-1 hover:gap-2
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
          text-sm
          text-zinc-500
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
        mt-8
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
    font-weight: var(--font-weight-medium);
    color: var(--color-zinc-800);
    text-decoration: underline;
    text-decoration-color: var(--color-zinc-400);
    text-underline-offset: 0.25rem;

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--default-transition-timing-function);
    transition-duration: var(--default-transition-duration);

    &:hover {
      text-decoration-color: var(--color-black);
    }
  }

  blockquote {
    border-inline-start: 2px var(--color-zinc-500);
    padding-inline-start: calc(var(--spacing) * 4);
    padding-block: var(--spacing);
  }
}

:global(.dark) .blog {
  a {
    color: var(--color-zinc-200);
    text-decoration-color: var(--color-zinc-600);

    &:hover {
      text-decoration-color: var(--color-white);
    }
  }
}
</style>
