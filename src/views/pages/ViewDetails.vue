<template>
  <div class="show-details">
    <article v-if="store.state.showDetails.name">
      <h1 class="bold">
        <backButton />
        {{ store.state.showDetails.name }}
      </h1>
      <div class="detail-grid">
        <div class="media">
          <a :href="store.state.showDetails.officialSite">
            <img v-if="store.state.showDetails.image?.original" :src="store.state.showDetails.image?.original"
              :alt="store.state.showDetails.name" />
            <img v-else src="@/assets/images/no-image.jpeg" />
          </a>
          <small v-if="store.state.showDetails.officialSite">
            {{ store.state.showDetails.name }} by <a :href="store.state.showDetails.officialSite">{{ store.state.showDetails.network?.name
            }}</a>
          </small>
        </div>
        <div class="decscription">
          <h2 v-if="store.state.showDetails.name">{{ store.state.showDetails.name }}</h2>
          <div class="genre">
            <span v-for="genre in store.state.showDetails.genres" :key="genre">{{
                genre
            }}</span>
          </div>
          <div v-if="store.state.showDetails.summary" v-html="store.state.showDetails.summary"></div>
          <div>Rating: <span class="bold">{{ store.state.showDetails.rating?.average ? store.state.showDetails.rating?.average : "N/A"
          }}</span></div>
          <div>Language: {{ store.state.showDetails.language }}</div>
          <div>Status: {{ store.state.showDetails.status }}</div>
          <div>Type: {{ store.state.showDetails.type }}</div>
          <div>official Site: <a :href="store.state.showDetails.officialSite">{{ store.state.showDetails.officialSite }}</a></div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>

import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import backButton from "@/components/backButton.vue";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

let data = reactive({
  itemId: route.params.id ? route.params.id : "",
})



onMounted(() => {
  store.dispatch("viewDetails", data.itemId)
})

</script>
