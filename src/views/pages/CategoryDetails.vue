<template>
  <div class="category-list">
    <h1 v-if="store.state.singleCategory?.name">
      <backButton />{{ store.state.singleCategory?.name }}
    </h1>
    <div class="list__container">
      <ListItem v-for="item in store.state.singleCategory?.shows" :key="item.id" :title="item.name" :imgUrl="item.image?.medium"
        :itemLink="item.id" :rating="item.rating.average" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import ListItem from "@/components/ListItem.vue";
import backButton from '@/components/backButton.vue';
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const data = reactive({
  itemId: route.params.id ? route.params.id : "",
})

onMounted(() => {
  store.dispatch("loadSingleCategory", data.itemId)
})

</script>