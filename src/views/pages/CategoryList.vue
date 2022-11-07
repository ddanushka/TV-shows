<template>
  <div class="category-list">
    <h1>Select a category</h1>
    <section v-for="genre in store.state.orderedShowList" :key="genre.name">
      <h2>
        <router-link :to="'/category/' + genre.name">{{ genre.name }}</router-link>
      </h2>
      <div class="category-list__item">
        <div class="list__container row">
          <ListItem v-for="item in genre.shows" :key="item.id" :title="item.name" :imgUrl="item.image?.medium"
            :itemLink="item.id" :rating="item.rating?.average" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

import ListItem from "@/components/ListItem.vue";
import { useStore } from "vuex";

const store = useStore();

</script>