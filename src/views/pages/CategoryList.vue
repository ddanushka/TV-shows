<template>
  <div class="category-list">
    <h1>Select a category</h1>
    <section v-for="genre in data.orderedShowList" :key="genre.name">
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
    <StatusMsg :msg="data.errorMsg" />
  </div>
</template>

<script setup>

import { reactive, onMounted } from "vue";
import ListItem from "@/components/ListItem.vue";
import StatusMsg from "@/components/StatusMsg.vue";
import { allShows, orderShows } from "@/services/data";

let data = reactive({
  orderedShowList: [],
  errorMsg: "",
})

function loadAllshows() {
  allShows()
    .then((res) => {
      const { showList } = orderShows(res)
      data.orderedShowList = showList
    })
    .catch((err) => {
      data.errorMsg = "Couldn't find the show you're looking for, " + err.message;
    });
}

onMounted(() => {
  loadAllshows()
})

</script>