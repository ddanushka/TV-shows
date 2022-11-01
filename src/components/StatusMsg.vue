<template>
  <div v-if="$store.state.message" class="status" @click="goBack">
    <span class="status__text">{{ $store.state.message }}</span>
  </div>
</template>

<script setup>
// import { inject } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
// const store = inject("store");

function goBack() {
  router.go(-1);
}

</script>