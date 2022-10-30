<template>
  <div class="list">
    <h1>Search results for "<span class="bold">{{ data.keyword }}</span>"</h1>
    <div class="list__container">
      <ListItem v-for="item in data.searchList" :key="item.show.id" :title="item.show.name"
        :imgUrl="item.show.image?.medium" :itemLink="item.show.id" :genres="item.show.genres"
        :rating="item.show.rating.average" />
    </div>
  </div>
</template>

<script setup>

import { reactive, watch, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
import { getSearchResult } from "@/services/data";
import ListItem from "@/components/ListItem.vue";

const route = useRoute();
const store = inject("store");

let data = reactive({
  searchList: [],
  keyword: route.params.keyword ? route.params.keyword : "",
})

function searchShows(data) {
  getSearchResult(data.keyword)
    .then((res) => {
      data.searchList = res;
    })
    .catch((err) => {
      let msg = "Couldn't find the show you're looking for, " + err.message;
      store.methods.setErrorMessage(msg)
    });
}

watch(() => route.params, () => {
  data.keyword = route.params.keyword;
  searchShows(data);
})

onMounted(() => {
  searchShows(data)
})

</script>