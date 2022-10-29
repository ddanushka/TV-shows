<template>
  <div class="list">
    <h1>Search results for "<span class="bold">{{keyword}}</span>"</h1>
    <div class="list__container">
      <ListItem
      v-for="item in searchList" :key="item.show.id"
      :title="item.show.name"
      :imgUrl="item.show.image?.medium"
      :itemLink="item.show.id"
      :genres="item.show.genres"
      />
    </div>
  </div>
  <StatusMsg v-if="errorMsg" :msg="errorMsg"/>
</template>

<script>
import { getSearchResult } from "@/services/data";
import StatusMsg from "@/components/StatusMsg.vue";
import ListItem from "@/components/ListItem.vue";

export default {
  data() {
    return {
      searchList: [],
      keyword: this.$route.params.keyword,
      errorMsg:"",
    };
  },
  components: {
    StatusMsg,
    ListItem,
  },
  methods: {
    searchShows(keyword) {
      getSearchResult(keyword)
        .then((res) => {
          this.searchList = res;
          console.log(res);
        })
        .catch((err) => {
          this.errorMsg = "Couldn't find the show you're looking for, " + err.message;
        });
    },
  },
  created() {
    this.searchShows(this.keyword);
  },
  watch: {
    $route() {
      this.keyword = this.$route.params.keyword;
      this.searchShows(this.keyword);
    }
  }
};
</script>