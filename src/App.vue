<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="w-full h-screen flex">
    <Navigation />
    <main class="w-full h-full p-8 flex flex-col">
      <router-view />
    </main>
  </div>
</template>
