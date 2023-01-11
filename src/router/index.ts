import { createRouter, createWebHistory } from "vue-router";
import CountryList from "../components/CountryList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "countryList",
      component: CountryList,
    },
    {
      path: "/country/:name",
      name: "country",
      component: () => import("@/components/CountryBoard.vue"),
    },
  ],
});

export default router;
