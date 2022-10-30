<template>
  <div class="category-list">
    <h1><backButton />{{showList.name}}</h1>
    <div class="list__container">
      <ListItem v-for="item in showList.shows" :key="item.id"
        :title="item.name"
        :imgUrl="item.image?.medium"
        :itemLink="item.id"
        :rating="item.rating.average"
      />
    </div>
    <StatusMsg v-if="errorMsg" :msg="errorMsg" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import ListItem from "@/components/ListItem.vue";
import StatusMsg from "@/components/StatusMsg.vue";
import { allShows, orderShows } from "@/services/data";
import backButton from '@/components/backButton.vue';
export default {
  data() {
    return {
      showList: [],
      orderedShowList: [],
      errorMsg: "",
      itemId: useRoute().params.id ? useRoute().params.id : "",
    };
  },
  components: {
    ListItem,
    StatusMsg,
    backButton
  },
  methods: {
    loadAllshows() {
      allShows()
        .then((res) => {
          const { showList } = orderShows(res)
          this.showList = showList.filter(item=> item.name == this.itemId)[0]
        })
        .catch((err) => {
          this.errorMsg = "Couldn't find the show you're looking for, " + err.message;
        });
    },
  },
  created() {
    this.loadAllshows(this.itemId);
  },
};
</script>