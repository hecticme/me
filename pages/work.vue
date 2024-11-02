<script setup lang="ts">
useSeoMeta({
  title: 'Work',
})

const projects = [
  {
    title: 'Manic theme for VSCode',
    description: 'Just a random VSCode theme that I mainly use.',
    href: 'https://github.com/hecticme/manic-vscode-theme',
  },
  {
    title: 'Simplemodoro',
    description: 'A simple pomodoro clock.',
    href: 'https://github.com/hecticme/simplemodoro-2.0',
  },
  {
    title: 'CSS Unit Converter',
    description: 'Converting CSS unit through an online editor.',
    href: 'https://github.com/hecticme/cssunit',
  },
]
</script>

<template>
  <div class="body-container">
    <h2 class="font-semibold text-2xl tracking-tight">
      I have built a few things.
    </h2>

    <section class="mt-6 flex flex-col gap-2">
      <ProjectEntry
        v-for="(project, index) of projects"
        :key="index"
        v-bind="project"
      />
    </section>
  </div>
</template>
