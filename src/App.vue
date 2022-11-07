<template>
  <header class="header">
    <StaticHeader/>
    <StatusMsg/>
  </header>
  <main class="body-content">
    <router-view/>
  </main>
</template>

<style lang="scss">
  @import '@/assets/styles/main.scss';
</style>

<script setup>
import { provide, onMounted } from 'vue';
import StatusMsg from './components/StatusMsg.vue';
import store from './store';
import StaticHeader from './views/layout/StaticHeader.vue';

provide("store", store);

onMounted(() => {
  store.dispatch("loadAllshows")
})
</script>
