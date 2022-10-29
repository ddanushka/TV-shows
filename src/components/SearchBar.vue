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
      search: "",
      placeholder: "Search...",
    };
  },
  methods: {
    checkText() {
      this.search === "" ? (this.disabled = true) : (this.disabled = false);
    },

    submitSearch() {
      if (this.search) {
        this.$emit("search-shows", this.search);
      }
    },

    initSearch() {
      this.search = "";
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>