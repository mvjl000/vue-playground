<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="w-full h-screen flex">
    <Navigation />
    <router-view />
  </div>
</template>
