// router.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("./views/Home.vue") },
  { path: "/sub-app/:pathMatch(.*)*", name: "sub-app", component: () => import("./views/SubApp.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
