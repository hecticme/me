<script setup lang="ts"></script>

<template>
  <section class="welcome-message">
    <div class="welcome-message__say-hi">
      <h1>Hi! I'm Minh.</h1>
      <h1>a web developer.</h1>
    </div>

    <div class="welcome-message__description">
      <p>I'm also a designer with a perceptive vision</p>
      <p>for bringing engaging UI to life.</p>
    </div>
  </section>
</template>

<style scoped>
.welcome-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.welcome-message__say-hi {
  font-family: var(--header-font);
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
}

.welcome-message__description {
  text-align: center;
  line-height: 1.4;
}
</style>
