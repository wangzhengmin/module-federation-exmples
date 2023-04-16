import HostHome from "../HostHome.vue";
import shellRoutes from "shell/routes";

const routes = [
  ...shellRoutes,
  {
    path: "/host",
    component: HostHome,
    children: [
      {
        path: "about",
        component: () => import("../HostAbout.vue"),
      },
    ],
  },
];

export default routes;
