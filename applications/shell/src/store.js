import { createStore } from "vuex";

const store = createStore({
  state: {
    num: 15,
    username: "wwww",
  },
  mutations: {
    add(state) {
      console.log("shell num++")
      state.num++;
    },
    setUsername(state, payload) {
      state.username = payload;
    },
  },
  actions: {
    login({ commit }, payload) {
     const account  = prompt('请输入账号');

     if(!account) {
      alert("登录失败");
      return;
     }

      setTimeout(() => {
        commit("setUsername", account);
      }, 2000);
    },
    logout({ commit }) {
      commit("setUsername", "");
    },
  },
});

export default store;
