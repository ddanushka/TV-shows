<template>
    <div class="home">
      <div>
        <StatusMsg v-if="msg" msg="showing status" />
      </div>
    </div>
  </template>

  <script>
  // @ is an alias to /src
  import StatusMsg from "@/components/StatusMsg.vue";
  import { getShow } from "@/services/data";

  getShow(10000)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Couldn't find the show you're looking for, " + err.message);
    });
  export default {
    data() {
      return {
        msg: "",
      };
    },
    name: "HomeView",
    components: {
      StatusMsg,
    },
  };
  </script>
