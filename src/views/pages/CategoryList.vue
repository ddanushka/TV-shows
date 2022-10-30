<template>
  <div class="category-list">
    <h1>Select a category</h1>
    <section v-for="genre in orderedShowList" :key="genre.name">
      <h2><router-link :to="'/category/'+ genre.name">{{genre.name}}</router-link></h2>
      <div class="category-list__item">
        <div class="list__container row">
          <ListItem v-for="item in genre.shows" :key="item.id"
            :title="item.name"
            :imgUrl="item.image?.medium"
            :itemLink="item.id"
            :rating="item.rating?.average"
          />
        </div>
      </div>
    </section>
    <StatusMsg :msg="errorMsg" />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import StatusMsg from "@/components/StatusMsg.vue";
import { allShows, orderShows } from "@/services/data";
export default {
  data() {
    return {
      orderedShowList: [],
      errorMsg: "",
    };
  },
  components: {
    ListItem,
    StatusMsg,
  },
  methods: {
    loadAllshows() {
      allShows()
        .then((res) => {
          const { showList} = orderShows(res)
          this.orderedShowList = showList
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