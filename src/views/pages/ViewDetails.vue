<template>
  <div class="show-details">
    <article v-if="data.showDetails.name">
      <h1 class="bold">
        <backButton />
        {{ data.showDetails.name }}
      </h1>
      <div class="detail-grid">
        <div class="media">
          <a :href="data.showDetails.officialSite">
            <img v-if="data.showDetails.image?.original" :src="data.showDetails.image?.original"
              :alt="data.showDetails.name" />
            <img v-else src="@/assets/images/no-image.jpeg" />
          </a>
          <small v-if="data.showDetails.officialSite">
            {{ data.showDetails.name }} by <a :href="data.showDetails.officialSite">{{ data.showDetails.network?.name
            }}</a>
          </small>
        </div>
        <div class="decscription">
          <h2 v-if="data.showDetails.name">{{ data.showDetails.name }}</h2>
          <div class="genre">
            <span v-for="genre in data.showDetails.genres" :key="genre">{{
                genre
            }}</span>
          </div>
          <div v-if="data.showDetails.summary" v-html="data.showDetails.summary"></div>
          <div>Rating: <span class="bold">{{ data.showDetails.rating?.average ? data.showDetails.rating?.average : "N/A"
          }}</span></div>
          <div>Language: {{ data.showDetails.language }}</div>
          <div>Status: {{ data.showDetails.status }}</div>
          <div>Type: {{ data.showDetails.type }}</div>
          <div>official Site: <a :href="data.showDetails.officialSite">{{ data.showDetails.officialSite }}</a></div>
        </div>
      </div>
    </article>
    <StatusMsg :msg="data.errorMsg" />
  </div>
</template>

<script setup>

import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getShow } from "@/services/data";
import StatusMsg from "@/components/StatusMsg.vue";
import backButton from "@/components/backButton.vue";

const route = useRoute()

let data = reactive({
  errorMsg: "",
  itemId: route.params.id ? route.params.id : "",
  showDetails: {
    name: "",
    summary: "",
    language: "",
    status: "",
    genres: []
  },
})

onMounted(() => {
  getShow(data.itemId)
    .then((res) => {
      data.showDetails = res;
    })
    .catch((err) => {
      data.errorMsg = "Couldn't find the show you're looking for, " + err.message;
    });
})

</script>
