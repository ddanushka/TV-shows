<template>
  <div class="show-details">
    <article v-if="showDetails.name">
      <h1 class="bold">
        <backButton />
        {{ showDetails.name }}
      </h1>
      <div class="detail-grid">
        <div class="media">
          <a :href="showDetails.officialSite">
            <img :src="showDetails.image?.original" :alt="showDetails.name" />
          </a>
        </div>
        <div class="decscription">
          <h2>{{ showDetails.name }}</h2>
          <div class="genre">
            <span v-for="genre in showDetails.genres" :key="genre">{{
              genre
            }}</span>
          </div>
          <div v-html="showDetails.summary"></div>
        </div>
        <div>
          <a :href="showDetails.officialSite"
            >{{ showDetails.name }} By {{ showDetails.network?.name }}</a
          >
        </div>
      </div>
    </article>
    <StatusMsg v-else :msg="msg" />
  </div>
</template>

  <script>
// @ is an alias to /src
import { useRoute } from "vue-router";
import { getShow } from "@/services/data";
import StatusMsg from "@/components/StatusMsg.vue";
import backButton from "@/components/backButton.vue";

export default {
  data() {
    return {
      msg: "",
      itemId: useRoute().params.id ? useRoute().params.id : "1",
      showDetails: {},
    };
  },
  components: {
    StatusMsg,
    backButton,
  },
  created() {
    const itemId = useRoute().params.id;
    if (itemId) {
      this.itenId = itemId;
    }
    console.log(this.itemId);
    getShow(this.itemId)
      .then((res) => {
        console.log(res);
        this.showDetails = res;
      })
      .catch((err) => {
        this.msg = "Couldn't find the show you're looking for, " + err.message;
      });
  },
};
</script>
