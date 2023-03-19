<script setup lang="ts">
import { ref, computed } from "vue";

interface Tab {
  id: number;
  name: string;
  content: string;
}

const tabs = ref<Tab[]>([
  { id: 1, name: "Test.vue", content: "Lorem lkjansdjk ansdkj naskjd n" },
  { id: 2, name: "App.tsx", content: "Julka zaplacila za pizze" },
  { id: 3, name: "Qwerty.vue", content: "Julka ma kota emilke" },
  { id: 4, name: "Lorem.tsx", content: "Emilka sika na wsztystko" },
  { id: 5, name: "File.tsx", content: "Czerep czerep czerep" },
]);

const activeTab = ref<number | null>(1);
const activeTabContent = computed(() => {
  const activeTabObj = tabs.value.find((tab) => tab.id === activeTab.value);
  console.log("activeOBJ", activeTabObj);
  if (activeTabObj === undefined) return "Something went wrong!";

  return activeTabObj.content;
});

const setAcitveTab = (tabId: number) => {
  activeTab.value = tabId;
};
</script>

<template>
  <h1 class="text-white text-4xl text-center tracking-wide">Tabs</h1>
  <div class="mt-8 w-full flex-grow flex">
    <div class="h-full min-w-[100px] w-1/6 bg-neutral-800"></div>
    <div class="flex flex-col h-full flex-grow bg-neutral-900">
      <ul class="h-14 flex justify-start items-end gap-2 bg-neutral-800">
        <li
          v-for="tab in tabs"
          :key="tab.id"
          class="group h-2/3 pl-3 pr-1 flex justify-between items-center gap-1 text-white bg-stone-700 rounded-tl-md rounded-tr-md cursor-pointer"
          :class="{ 'bg-neutral-900': activeTab === tab.id }"
          @click="setAcitveTab(tab.id)"
        >
          {{ tab.name }}
          <button
            class="invisible group-hover:visible w-6 h-6 text-sm flex items-center justify-center rounded-md hover:bg-stone-800"
          >
            x
          </button>
        </li>
      </ul>
      <p class="p-5 text-white">{{ activeTabContent }}</p>
    </div>
  </div>
</template>
