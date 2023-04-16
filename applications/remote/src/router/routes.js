import RemoteHome from "../RemoteHome.vue";

const routes = [
  {
    path: "/remote/home",
    component: RemoteHome
  },
  {
    path: "/remote/about",
    component: ()=>import("../RemoteAbout.vue")
  }
]

export default routes;