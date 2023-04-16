<template>
  <div>
    {{ count }}
    <p> Reomte Home page</p>
    <p> Reomte Home page</p>
    <p> Reomte Home page</p>
    <button @click="add">remote应用修改host的vuex</button>
  </div>
</template>

<script setup>
import {computed} from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = computed(() => store?.state?.count);
const add = () => store.commit("add");
</script>

<style lang="scss" scoped>

</style>