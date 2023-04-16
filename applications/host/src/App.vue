<template>
  <div>
    <Header />
    <h2>这是一个 host app</h2>
  </div>
</template>
<script setup>

// 同步加载组件
// import Header from "remote/Header";

// 异步加载组件
import { defineAsyncComponent } from 'vue';
const Header = defineAsyncComponent({
  loader: ()=>import("remote/Header")
})
</script>
