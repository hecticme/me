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
          class="flex items-center gap-4 group"
          to="/blog/hello"
        >
          <span class="font-semibold">
            Hello
          </span>

          <span class="text-sm">
            August 10, 2024
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
