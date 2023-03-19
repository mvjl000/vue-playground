<script setup lang="ts">
import { ref, computed } from "vue";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

const id = ref(0);
const task = ref("");
const tasks = ref<Task[]>([]);
const isDisabled = computed(() => task.value === "");

const addTask = () => {
  if (isDisabled.value) return;

  tasks.value.push({ id: id.value, text: task.value, done: false });
  task.value = "";
  id.value++;
};

const removeTask = (id: number) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

const toggleTask = (id: number) => {
  tasks.value = tasks.value.map((task) => {
    if (task.id !== id) return task;

    return {
      ...task,
      done: !task.done,
    };
  });
};
</script>

<template>
  <h1 class="text-white text-4xl text-center tracking-wide">Todo list</h1>
  <div class="w-full h-full flex justify-center items-center">
    <div
      class="min-w-[400px] w-1/2 max-w-[1000px] min-h-[400px] h-4/6 max-h-[1500px] p-4 flex flex-col gap-5 bg-black rounded-lg"
    >
      <form @submit.prevent="addTask" class="flex gap-3 h-16">
        <input
          class="flex-grow h-16 px-2 bg-stone-800 rounded-md text-xl text-white border-none"
          v-model="task"
          placeholder="Learn a new framework"
        />
        <button
          :disabled="isDisabled"
          type="submit"
          class="w-16 h-16 bg-stone-800 text-white rounded-md disabled:bg-black disabled:text-stone-500"
        >
          ADD
        </button>
      </form>
      <ul class="flex-grow flex flex-col gap-3">
        <li
          v-for="todo in tasks"
          :key="todo.id"
          class="rounded-sm flex justify-between items-center gap-5"
        >
          <button
            type="button"
            @click="toggleTask(todo.id)"
            class="px-2 py-1 flex-grow font-mono text-white text-lg bg-zinc-900 text-left hover:bg-zinc-800 focus-visible:bg-zinc-800"
            :class="{
              'bg-[#0a0a0a]': todo.done,
              'hover:bg-[#111]': todo.done,
              'focus-visible:bg-[#111]': todo.done,
            }"
          >
            <span v-if="todo.done" class="line-through">{{ todo.text }}</span>
            <span v-else>{{ todo.text }}</span>
            <span class="text-xs text-zinc-500"> id:{{ todo.id }}</span>
          </button>
          <button
            type="button"
            @click="removeTask(todo.id)"
            class="w-7 h-7 text-white rounded-md hover:bg-stone-600 focus-visible:bg-stone-600"
          >
            X
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
