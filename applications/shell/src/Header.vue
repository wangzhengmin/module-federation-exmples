<template>
  <div class="header">
    <span>Shell header</span>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/host">Host</router-link> |
      <router-link to="/remote">Remote</router-link>
    </div>
    <div>
      <button v-if="!username" @click="login">登录</button>
      <button v-else @click="logout">注销</button>
    </div>
    <span>{{ username }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
const username = computed(() => store?.state?.username);

const login = () => store.dispatch("login", route.query.username);
const logout = () => store.dispatch("logout");
</script>
<style scoped>
.header {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  background-color: aquamarine;
  color: blueviolet;
}
</style>
