<template>
  <div class="list">
    <h1 v-if="store.state.searchList?.length">Search results for "<span class="bold">{{ data.keyword }}</span>"</h1>
    <h1 v-else>No results found for "<span class="bold">{{ data.keyword }}</span>"</h1>

    <div class="list__container">
      <ListItem v-for="item in store.state.searchList" :key="item.show.id" :title="item.show.name"
        :imgUrl="item.show.image?.medium" :itemLink="item.show.id" :genres="item.show.genres"
        :rating="item.show.rating.average" />
    </div>
  </div>
</template>

<script setup>

import { reactive, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import ListItem from "@/components/ListItem.vue";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

let data = reactive({
  keyword: route.params.keyword ? route.params.keyword : "",
})



watch(() => route.params, () => {
  data.keyword = route.params.keyword;
  store.dispatch("searchShows", data)

})

onMounted(() => {
  store.dispatch("searchShows", data)
})

</script>