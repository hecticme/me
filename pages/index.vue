<script setup lang="ts"></script>

<template>
  <section class="welcome-message">
    <div class="welcome-message__say-hi">
      <h1>Hi! I'm Minh.</h1>
      <h1>a web developer.</h1>
    </div>

    <p class="welcome-message__more-description">
      I'm also a designer with a perceptive vision for bringing engaging UI to
      life.
    </p>
  </section>
</template>

<style lang="scss" scoped>
.welcome-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &__say-hi {    
    h1 {
      font-family: var(--header-font);
      font-size: 4rem;
      font-weight: 700;
      text-align: center;
      line-height: 1.3;
    }
  }

  &__more-description {
    width: 20rem;
    text-align: center;
    line-height: 1.4;
  }
}
</style>
