<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <aside
    class="w-1/6 min-w-[150px] max-w-[300px] h-full flex justify-center items-center bg-black"
  >
    <nav>
      <ul class="flex flex-col gap-5 text-2xl text-white">
        <li class="hover:text-emerald-200">
          <router-link :to="{ name: 'todo' }">Todo</router-link>
        </li>
        <li class="hover:text-emerald-200">
          <router-link :to="{ name: 'date' }">Date Picker</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
