<template>
  <div class="search-bar">
    <img class="search-bar__icon" src="@/assets/images/search.svg" />
    <input :placeholder="data.placeholder" v-model="data.search" @keyup="checkText" @keyup.enter="submitSearch" />
    <button class="close" :disabled="data.disabled" @click="initSearch">
      <img class="close__icon" src="@/assets/images/close.svg" />
    </button>
  </div>
</template>

<script setup>

import { reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

let data = reactive({
  disabled: Boolean,
  search: route.params.keyword ? route.params.keyword : "",
  placeholder: "Search...",
})

function checkText() {
  data.disabled = data.search === "" ? true : false;
}

function submitSearch() {
  if (data.search) {
    router.push({
      path: `/search/${data.search}`,
    });
  }
  else {
    router.push({
      path: `/`,
    });
  }
}

function initSearch() {
  data.search = "";
  checkText();
  router.push({ path: "/" });
}

watch(() => route.params, () => {
  data.search = route.params.keyword
    ? route.params.keyword
    : "";
})

</script>

<style>

</style>