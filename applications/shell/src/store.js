import { createStore } from "vuex";

const store = createStore({
  state:{
    count: 15
  },
  mutations: {
    add(state) {
      state.count++;
    }
  }
});

export default store;