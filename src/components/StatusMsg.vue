<template>
  <div v-if="msg" class="status">
    <span class="status__text">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: "StatusMessage",
  props: {
    msg: String,
  },
};
</script>