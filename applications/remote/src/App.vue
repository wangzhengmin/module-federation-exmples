<template>
  <div class="container">
    <Header />
    <h2>这是一个 remote app</h2>
    <div>
      <div id="nav">
        <router-link to="/remote/home">Home</router-link> |
        <router-link to="/remote/about">About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script setup>
import Header from "./Header.vue";
</script>

<style>
.container {
  border: 1px solid red;
}
</style>
