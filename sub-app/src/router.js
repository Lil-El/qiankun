import { createRouter, createWebHistory, createMemoryHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/sub-app"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./views/About.vue"),
    },
  ],
});

export default router;