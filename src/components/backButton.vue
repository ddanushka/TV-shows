<template>
  <button class="back-btn" @click="gotback">
    <img src="@/assets/images/left-arrow.svg" />
  </button>
</template>

<script>
// import { useRouter } from 'vue-router';
export default {
  methods: {
    gotback() {
      this.$router.go(-1);
    },
  },
};
</script>
