<template>
  <StatusMsg msg="simple work" />
  <div class="list">
    <h1>Search results for "<span class="bold">Keyword</span>"</h1>
    <div class="list__container">
      <div v-for="item in searchList" :key="item.id">
        <ListItem
          :title="item.name"
          :imgUrl="item.image?.medium"
          :itemLink="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchResult } from "@/services/data";
import StatusMsg from "@/components/StatusMsg.vue";
import ListItem from "@/components/ListItem.vue";
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      searchList: [],
      keyword: ""
    };
  },
  components: {
    StatusMsg,
    ListItem,
  },
  methods: {
    loadAllshows() {
      getSearchResult()
        .then((res) => {
          this.searchList = res;
        })
        .catch((err) => {
          console.log(
            "Couldn't find the show you're looking for, " + err.message
          );
        });
    },
  },
  created() {
    const keyword = useRoute().params.key;
    if(keyword) {
      this.keyword = keyword
    }
    this.loadAllshows();
  },
};
</script>