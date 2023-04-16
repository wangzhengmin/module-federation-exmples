<template>
<Layout>
  <div class="si-container">
   <div class="si-side">
    <router-link to="/remote/about">about</router-link>
   </div>
   <div class="si-content">
    <router-view></router-view>
   </div>
  </div>
</Layout>
</template>

<script setup>
import Layout from 'shell/Layout';
</script>

<style>
.si-container {
  display: flex;
  flex-flow: row nowrap;
}
.si-side {
  flex: 0 0 auto;
  width: 200px;
  padding: 10px;
  line-height: 40px;
  border:1px solid;
}
.si-content {
  padding: 20px;
}
</style>