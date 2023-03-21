<script setup lang="ts">
import { ref, computed } from "vue";

interface Tab {
  id: number;
  name: string;
  content: string;
}

const newFile = ref("");

const tabs = ref<Tab[]>([
  { id: 1, name: "Test.vue", content: "Lorem lkjansdjk ansdkj naskjd n" },
  { id: 2, name: "App.tsx", content: "Julka zaplacila za pizze" },
  { id: 3, name: "Qwerty.vue", content: "Julka ma kota emilke" },
  { id: 4, name: "Lorem.tsx", content: "Emilka sika na wsztystko" },
  { id: 5, name: "File.tsx", content: "Czerep czerep czerep" },
]);

const openedTabs = ref<Tab[]>([]);

const activeTab = ref<number | null>(null);

const activeTabContent = computed(() => {
  const activeTabObj = openedTabs.value.find(
    (tab) => tab.id === activeTab.value
  );

  if (activeTabObj === undefined) return null;

  return activeTabObj.content;
});

const setAcitveTab = (tabId: number) => {
  activeTab.value = tabId;
};

const closeTab = (tabId: number) => {
  if (openedTabs.value.length === 1) {
    activeTab.value = null;
  }

  if (tabId === activeTab.value) {
    activeTab.value = openedTabs.value[openedTabs.value.length - 1].id;
  }
  openedTabs.value = openedTabs.value.filter((tab) => tab.id !== tabId);
};

const createFile = () => {
  const newItem: Tab = {
    id: Math.random(),
    name: newFile.value,
    content: "Nothing here yet",
  };
  tabs.value.push(newItem);
  openedTabs.value.push(newItem);
  setAcitveTab(newItem.id);
  newFile.value = "";
};

const openTab = (tab: Tab) => {
  setAcitveTab(tab.id);
  if (openedTabs.value.find((item) => item.id === tab.id)) return;
  openedTabs.value.push(tab);
};

const deleteFile = (tabId: Tab) => {
  tabs.value = tabs.value.filter((tab) => tab.id !== tabId);
  const filteredOpenedTabs = openedTabs.value.filter((tab) => tab.id !== tabId);
  openedTabs.value = filteredOpenedTabs;
  if (filteredOpenedTabs.length > 0) {
    setAcitveTab(filteredOpenedTabs[filteredOpenedTabs.length - 1].id);
  } else {
    setAcitveTab(null);
  }
};
</script>

<template>
  <h1 class="text-white text-4xl text-center tracking-wide">Tabs</h1>
  <div class="mt-8 w-full flex-grow flex">
    <div class="h-full min-w-[200px] w-1/6 bg-neutral-800">
      <form
        @submit.prevent="createFile"
        class="h-14 px-2 flex justify-between items-center gap-1"
      >
        <input
          class="h-3/5 w-full px-1 bg-stone-900 text-white text-sm"
          v-model="newFile"
          placeholder="New file"
        />
        <button
          class="w-8 h-3/5 bg-stone-900 text-white text-center text-xl"
          type="submit"
        >
          +
        </button>
      </form>
      <ul class="mt-5 flex flex-col gap-3 items-center">
        <li
          v-for="tab in tabs"
          @click="openTab(tab)"
          :key="tab.id"
          class="w-4/5 h-9 px-2 flex justify-between items-center text-white bg-neutral-900 rounded-md cursor-pointer"
        >
          {{ tab.name }}
          <button
            class="w-6 h-6 text-sm flex items-center justify-center rounded-md hover:bg-stone-800"
            @click.stop="deleteFile(tab.id)"
          >
            x
          </button>
        </li>
      </ul>
    </div>
    <div class="flex flex-col h-full flex-grow bg-stone-900">
      <ul class="h-14 pl-2 flex justify-start items-end gap-2 bg-neutral-700">
        <li
          v-for="tab in openedTabs"
          :key="tab.id"
          class="group h-2/3 pl-3 pr-1 flex justify-between items-center gap-1 text-white border-2 border-b-0 border-stone-800 rounded-tl-md rounded-tr-md cursor-pointer hover:bg-stone-800"
          :class="{
            'bg-stone-900 hover:bg-stone-900': activeTab === tab.id,
            'border-stone-900': activeTab === tab.id,
          }"
          @click="setAcitveTab(tab.id)"
        >
          {{ tab.name }}
          <button
            class="invisible group-hover:visible w-6 h-6 text-sm flex items-center justify-center rounded-md hover:bg-stone-800"
            @click.stop="closeTab(tab.id)"
          >
            x
          </button>
        </li>
      </ul>
      <p class="p-5 text-white">
        {{ activeTabContent }} --- activeTab - {{ activeTab }}
      </p>
    </div>
  </div>
</template>
