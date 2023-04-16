<template>
  <div class="header">
    <span>header</span>
    <span>{{ count }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const count = computed(()=>store?.state?.count)
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  background-color: aquamarine;
  color: blueviolet;
}
</style>