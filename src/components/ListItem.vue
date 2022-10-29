<template>
  <div class="card">
    <router-link :to="link">
      <h3 class="card__title">{{ title }}</h3>
      <img :src="imgUrl" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    title: {
      type: String,
      default: "name not available",
    },
    imgUrl: {
      type: String,
      default: "",
    },
    itemLink: {
      type: [String, Number],
      default: "/",
    },
  },
  computed: {
    link() {
      return  "/view/" + this.itemLink
    }
  }
};
</script>

<style>
</style>