import { createRouter, createWebHistory } from "vue-router";
import HostHome from "../HostHome.vue";
import remoteRoutes from "remote/routes";

const routes = [
  {
    path: "/",
   component: HostHome
  },
  {
    path: "/about",
    component: ()=>import("../HostAbout.vue")
  },
  ...remoteRoutes
]



const router = createRouter({ history: createWebHistory(), routes });

export default router;
