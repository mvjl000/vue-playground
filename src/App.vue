<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <h1 class="header">Hello World</h1>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/variables';
@import '@/assets/base';

a {
  color: $green;
}

.header {
  color: $green;
  font-size: 5rem;
}
</style>
