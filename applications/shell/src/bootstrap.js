import { createApp } from "vue";
import App from "./App.vue";
import("./store");

const app = createApp(App);
app.mount("#app");