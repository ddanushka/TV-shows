<template>
  <div v-if="msg" class="status">
    <span class="status__text">{{ props.msg }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  msg: {
    type: String,
    default: ""
  },
})
</script>