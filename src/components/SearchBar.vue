<template>
  <div class="search-bar">
    <img class="search-bar__icon" src="@/assets/images/search.svg" />
    <input
      :placeholder="placeholder"
      v-model="search"
      @keyup="checkText"
      @keyup.enter="submitSearch"
    />
    <button class="close" :disabled="disabled" @click="initSearch">
      <img class="close__icon" src="@/assets/images/close.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      disabled: Boolean,
      search: this.$route.params.keyword ? this.$route.params.keyword : "",
      placeholder: "Search...",
    };
  },
  methods: {
    checkText() {
      this.search === "" ? (this.disabled = true) : (this.disabled = false);
    },

    submitSearch() {
      if (this.search) {
        this.$router.push({
          path: `/search/${this.search}`,
        });
      }
      else {
        this.$router.push({
          path: `/`,
        });
      }
    },

    initSearch() {
      this.search = "";
      this.$router.push({ path: "/" });
    },
  },
  watch: {
    $route() {
      this.search = this.$route.params.keyword
        ? this.$route.params.keyword
        : "";
    },
  },
};
</script>

<style>
</style>