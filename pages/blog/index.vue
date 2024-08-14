<template>
  <div class="body-container">
    <h2 class="font-semibold text-xl tracking-tight">
      I write some of my thoughts here.
    </h2>

    <p class="mt-6">
      To remember who I was ✍️.
    </p>

    <ul class="mt-10 flex flex-col gap-6">
      <li>
        <NuxtLink
          class="
            flex items-center gap-4
            w-fit
            border-b-2 border-gray-400 hover:border-gray-700 dark:hover:border-gray-200
            transition-colors
          "
          to="/blog/hello"
        >
          <span class="font-semibold">
            Hello
          </span>

          <span class="text-sm text-gray-700 dark:text-gray-200 transition-colors">
            August 10, 2024
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
