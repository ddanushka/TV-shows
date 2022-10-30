import { reactive } from "vue";

const state = reactive({
  message: ""
})

const methods = {
  setErrorMessage(msg) {
    state.message = msg;
  }
}

export default {
  state,
  methods
}