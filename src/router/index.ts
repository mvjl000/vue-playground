import { createRouter, createWebHistory } from "vue-router";
import Todo from "../components/Todo.vue";
import DatePicker from "../components/DatePicker.vue";

const routes = [
  {
    path: "/",
    name: "todo",
    component: Todo,
  },
  {
    path: "/date",
    name: "date",
    component: DatePicker,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
