<template>
  <div class="footer">
    <span>Footer</span>
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
.footer {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  background-color: rgb(255, 127, 155);
  color: rgb(43, 101, 226);
}
</style>