const state = {
  count: 1,
};

const mutations = {
  add(state) {
    console.log("host count++")
    state.count++;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
