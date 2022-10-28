
<template>
  <span className="logo">
    <router-link to="/">
      LOGO
    </router-link>
  </span>
  <SearchBar @search-shows="searchShows"/>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "StaticHeader",
  components: {
    SearchBar,
  },
  methods: {
    searchShows(key) {
      console.log(key);
    },
  },
};
</script>

<style>
</style>