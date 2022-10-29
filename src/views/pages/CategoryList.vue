<template>
  <div class="category-list">
    <h1>Select a category</h1>
    <div class="list__container">
      <ListItem v-for="item in showList" :key="item.id"
        :title="item.name"
        :imgUrl="item.image?.medium"
        :itemLink="item.id"
        :genres="item.genres"
      />
    </div>
    <StatusMsg v-if="errorMsg" :msg="errorMsg" />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import StatusMsg from "@/components/StatusMsg.vue";
import { AllShows } from "@/services/data";
export default {
  data() {
    return {
      showList: [],
      errorMsg: "",
    };
  },
  components: {
    ListItem,
    StatusMsg,
  },
  methods: {
    loadAllshows() {
      AllShows()
        .then((res) => {
          this.showList = res;
          console.log(res)
        })
        .catch((err) => {
          this.errorMsg = "Couldn't find the show you're looking for, " + err.message;
        });
    },
  },
  created() {
    this.loadAllshows();
  },
};
</script>