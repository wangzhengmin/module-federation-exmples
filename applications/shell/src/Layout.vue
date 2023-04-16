<template>
  <div class="w-container">
    <Header />
    <div class="body">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
.w-container {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}
.body {
  flex: 1 1;
  border: 1px solid;
}
</style>
