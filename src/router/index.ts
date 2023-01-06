import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../components/CountriesList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "countriesList",
      component: CountriesList,
    },
    {
      path: "/country/:name",
      name: "country",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/Country.vue"),
    },
  ],
});

export default router;
