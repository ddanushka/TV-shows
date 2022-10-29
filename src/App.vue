<template>
  <header class="header">
    <StaticHeader/>
  </header>
  <main class="body-content">
    <router-view/>
  </main>
</template>

<style lang="scss">
  @import '@/assets/styles/main.scss';
</style>

<script>
import StaticHeader from './views/layout/StaticHeader.vue';
export default {
  components: {
    StaticHeader
  }
}
</script>
