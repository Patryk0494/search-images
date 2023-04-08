import MainPage from "../pages/MainPage/MainPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import ROUTING_URLS from "./routings";

const About = { template: "<div>About</div>" };

const routes = [
  { path: ROUTING_URLS.MAIN_PAGE, component: MainPage },
  { path: ROUTING_URLS.ABOUT, component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
