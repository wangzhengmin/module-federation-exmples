import RemoteHome from "../RemoteHome.vue";
import shellRoutes from "shell/routes";
const routes = [
  ...shellRoutes,
  {
    path: "/remote",
    component: RemoteHome,
    children: [
      {
        path: "home",
        component: RemoteHome,
      },
      {
        path: "about",
        component: () => import("../RemoteAbout.vue"),
      },
    ],
  },
];

export default routes;
