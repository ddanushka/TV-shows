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
          <small v-if="showDetails.officialSite">
            {{ showDetails.name }} by <a :href="showDetails.officialSite">{{ showDetails.network?.name }}</a>
          </small>
        </div>
        <div class="decscription">
          <h2 v-if="showDetails.name">{{ showDetails.name }}</h2>
          <div class="genre">
            <span v-for="genre in showDetails.genres" :key="genre">{{
              genre
            }}</span>
          </div>
          <div v-if="showDetails.summary" v-html="showDetails.summary"></div>
          <div v-if="showDetails.rating?.average">Rating: <span class="bold">{{showDetails.rating?.average}}</span></div>
          <div>Language: {{showDetails.language}}</div>
          <div>Status: {{showDetails.status}}</div>
        </div>
      </div>
    </article>
    <StatusMsg :msg="errorMsg"/>
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
      errorMsg: "",
      itemId: useRoute().params.id ? useRoute().params.id : "",
      showDetails: {
        name: "",
        summary: "",
        language: "",
        status: "",
        genres: []
      },
    };
  },
  components: {
    StatusMsg,
    backButton,
  },
  created() {
    getShow(this.itemId)
      .then((res) => {
        this.showDetails = res;
        console.log(res)
      })
      .catch((err) => {
        this.errorMsg = "Couldn't find the show you're looking for, " + err.message;
      });
  },
};
</script>
