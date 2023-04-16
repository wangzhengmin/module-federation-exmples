<template>
  <div>
    <p>Host About page</p>
    <p>User Name: {{ username }}</p>
    <p>{{ count }}</p>
    <button @click="add">add</button>
    <hr/>
    <p>{{ num }}</p>
    <button @click="numAdd">add</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const username = computed(()=>store.state.username)

const count = computed(()=>store.state?.countStore?.count);
const add = () => store.commit("countStore/add");

const num = computed(()=>store.state?.num);
const numAdd = () => store.commit("add");
</script>

<style lang="scss" scoped>

</style>