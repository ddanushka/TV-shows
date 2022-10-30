<template>
  <button class="back-btn" @click="gotback">
    <img src="@/assets/images/left-arrow.svg" />
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function gotback() {
  router.go(-1);
}
</script>
