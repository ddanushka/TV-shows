<template>
  <div class="category-list">
    <h1 v-if="data.showList?.name">
      <backButton />{{ data.showList?.name }}
    </h1>
    <div class="list__container">
      <ListItem v-for="item in data.showList?.shows" :key="item.id" :title="item.name" :imgUrl="item.image?.medium"
        :itemLink="item.id" :rating="item.rating.average" />
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import ListItem from "@/components/ListItem.vue";
import { allShows, orderShows } from "@/services/data";
import backButton from '@/components/backButton.vue';

const route = useRoute();
const store = inject("store");

const data = reactive({
  showList: [],
  orderedShowList: [],
  itemId: route.params.id ? route.params.id : "",
})

function loadAllshows() {
  allShows()
    .then((res) => {
      const { showList } = orderShows(res)
      data.showList = showList.filter(item => item.name == data.itemId)[0];
      if (!data.showList) {
        let msg = `Sorry, "${data.itemId}" Category is not found.`;
        store.methods.setErrorMessage(msg)
      }
    })
    .catch((err) => {
      let msg = "Couldn't find the show you're looking for, " + err.message;
      store.methods.setErrorMessage(msg)
    });
}

onMounted(() => {
  loadAllshows()
})

</script>