<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getShow } from '@/services/data';

getShow(10000).then(
  res => {
    console.log(res)
  }).catch((err) => {
    console.log("Couldn't find the show you're looking for, " + err.message)
  })
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
