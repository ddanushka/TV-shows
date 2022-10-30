<template>
  <div class="card">
    <router-link :to="link">
      <h3 class="card__title">{{ title }}</h3>
      <div class="genre-tags">
        <span v-for="genre in genres" :key="genre">{{genre}}</span>
      </div>
      <div class="rating">&#9733; {{rating}}</div>
      <img v-if="imgUrl" :src="imgUrl" />
      <img v-else src="@/assets/images/no-image.jpeg" />
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
    genres: {
      type: Array,
    },
    rating: {
      type: [String, Number],
      default: "N/A"
    }
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