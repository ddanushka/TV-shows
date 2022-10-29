
<template>
  <span class="logo">
    <router-link to="/">
      LOGO
    </router-link>
  </span>
  <SearchBar/>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "StaticHeader",
  components: {
    SearchBar,
  }
};
</script>

<style>
</style>