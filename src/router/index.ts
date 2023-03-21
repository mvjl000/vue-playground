import { createRouter, createWebHistory } from "vue-router";
import Todo from "../pages/Todo.vue";
import Tabs from "../pages/Tabs.vue";

const routes = [
  {
    path: "/",
    name: "todo",
    component: Todo,
  },
  {
    path: "/tabs",
    name: "tabs",
    component: Tabs,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
