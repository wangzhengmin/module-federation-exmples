import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

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

const app = createApp(App);
app.use(store)
app.mount("#app");
