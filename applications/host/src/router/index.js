import { createRouter, createWebHistory } from "vue-router";
import HostHome from "../HostHome.vue";

const routes = [
  {
    path: "/",
   component: HostHome
  },
  {
    path: "/about",
    component: ()=>import("../HostAbout.vue")
  },
]



const router = createRouter({ history: createWebHistory(), routes });

export default router;
