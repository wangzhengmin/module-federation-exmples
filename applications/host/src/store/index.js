import store from "shell/store";

import countModule from "./modules/count.module"

store.registerModule('countStore', countModule)

export default store;