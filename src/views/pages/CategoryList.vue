<template>
  <div class="category-list">
    <h1 @click="loadAllshows">
      <button class="back-btn">
        <img src="@/assets/images/left-arrow.svg" />
      </button>
      Select a category
    </h1>
    <StatusMsg msg="simple work" />
    <div class="list__container" >
      <div v-for="item in showList" :key="item.id">
        <ListItem :title="item.name" :imgUrl="item.image?.medium" :itemLink="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import StatusMsg from "@/components/StatusMsg.vue";
import { AllShows } from "@/services/data";
export default {
  data() {
    return {
      showList : [],
    };
  },
  components: {
    ListItem,
    StatusMsg
  },
  methods : {
    loadAllshows() {
      AllShows()
      .then((res) => {
        this.showList = res
      })
      .catch((err) => {
        console.log("Couldn't find the show you're looking for, " + err.message);
      });
    }
  }
};
</script>