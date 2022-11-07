<template>
  <div class="card">
    <router-link :to="link">
      <h3 class="card__title">{{ props.title }}</h3>
      <div class="genre-tags">
        <span v-for="genre in props.genres" :key="genre">{{ genre }}</span>
      </div>
      <div class="rating">&#9733; {{ props.rating ? props.rating : "N/A" }}</div>
      <img v-if="setImgUrl" :src="setImgUrl" @error="data.isLoaded = false"/>
      <img v-else src="@/assets/images/no-image.jpeg" />
    </router-link>
  </div>
</template>

<script setup>

import { defineProps, reactive } from 'vue';
import { computed } from '@vue/reactivity';

const data = reactive({
  isLoaded : {
    type: Boolean,
    default: true
  }
})
const props = defineProps({
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
})
const setImgUrl = computed(()=>{
  return data.isLoaded ? props.imgUrl : null;
})

const link = computed(() => {
  return "/view/" + props.itemLink
})

</script>