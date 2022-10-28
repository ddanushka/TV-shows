<template>
  <div className="status">
    <span className="status__text">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name : 'StatusMessage',
  props: {
    msg: String,
  },
};
</script>

<style>
</style>