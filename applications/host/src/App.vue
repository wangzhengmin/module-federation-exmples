<template>
  <div>
    <Header />
    <h2>这是一个 host app</h2>
    <p>{{ count }}</p>
    <button @click="add">add</button>
    <div>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/remote/home">Remote Home</router-link> |
        <router-link to="/remote/about">Remote About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script setup>
// 同步加载组件
// import Header from "remote/Header";

// 异步加载组件
import { defineAsyncComponent, computed } from "vue";
import { useStore } from "vuex";
const Header = defineAsyncComponent({
  loader: () => import("remote/Header"),
});

const store = useStore();
const count = computed(() => store?.state?.count);
const add = () => store.commit("add");
</script>
