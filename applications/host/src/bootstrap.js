import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import router from "./router"
import Test from "./Test.vue";
import remoteRoutes from "remote/routes";

const store = createStore({
  state: {
    count: 1,
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
});

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
