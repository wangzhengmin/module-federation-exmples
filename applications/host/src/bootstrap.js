import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import router from "./router"
import Test from "./Test.vue";
import remoteRoutes from "remote/routes";
import "vuex";

import store from "shell/store";

router.addRoute({
  path:"/test",
  component: Test
})

remoteRoutes.forEach(route => {
  router.addRoute(route)
})

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
