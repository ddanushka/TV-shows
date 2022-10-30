<template>
  <div class="category-list">
    <h1>
      <backButton />{{ data.showList?.name }}
    </h1>
    <div class="list__container">
      <ListItem v-for="item in data.showList?.shows" :key="item.id" :title="item.name" :imgUrl="item.image?.medium"
        :itemLink="item.id" :rating="item.rating.average" />
    </div>
    <StatusMsg :msg="data.errorMsg" />
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import ListItem from "@/components/ListItem.vue";
import StatusMsg from "@/components/StatusMsg.vue";
import { allShows, orderShows } from "@/services/data";
import backButton from '@/components/backButton.vue';

const route = useRoute();

const data = reactive({
  showList: [],
  orderedShowList: [],
  errorMsg: "",
  itemId: route.params.id ? route.params.id : "",
})

function loadAllshows() {
  allShows()
    .then((res) => {
      const { showList } = orderShows(res)
      data.showList = showList.filter(item => item.name == data.itemId)[0];
      if (!data.showList) {
        data.errorMsg = `Sorry, "${data.itemId}" Category is not found.`;
      }
    })
    .catch((err) => {
      data.errorMsg = "Couldn't find the show you're looking for, " + err.message;
    });
}

onMounted(() => {
  loadAllshows()
})

</script>