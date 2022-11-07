import { createStore } from 'vuex'
import { allShows, orderShows, getShow, getSearchResult } from '@/services/data';

export default createStore({

  state: {
    message: "",
    orderedShowList: [],
    singleCategory: [],
    showDetails: {
      name: "",
      summary: "",
      language: "",
      status: "",
      genres: []
    },
    searchList: []
  },

  mutations: {
    setErrorMessage(state, payload) {
      state.message = payload;
    },
    setOrderedShowList(state, payload) {
      state.orderedShowList = payload;
    },
    setSingleCategory(state, payload) {
      state.singleCategory = payload;
    },
    setShowDetails(state, payload) {
      state.showDetails = payload;
    },
    setSearchList(state, payload) {
      state.searchList = payload;
    }
  },

  actions: {
    //Set Error Message
    setErrorMessage({ commit }, payload) {
      commit("setErrorMessage", payload)
    },
    // Load all the Categories as a list
    loadAllshows({ commit }) {
      allShows()
        .then((res) => {
          const { showList } = orderShows(res)
          commit("setOrderedShowList", showList)
        })
        .catch((err) => {
          let msg = "Couldn't find the show you're looking for, " + err.message;
          commit("setErrorMessage", msg)
        });
    },

    // Show only selected Category
    loadSingleCategory({ commit }, payload) {
      let showSingleList = this.state.orderedShowList.filter(item => item.name == payload)[0];
      commit("setSingleCategory", showSingleList)
      if (!showSingleList) {
        let msg = `Sorry, "${payload}" Category is not found.`;
        commit("setErrorMessage", msg)
      }
    },
    // Show only selected Category from the URL
    preLoadSingleCategory({ commit }, payload) {
      allShows()
        .then((res) => {
          const { showList } = orderShows(res)
          let showSingleList = showList.filter(item => item.name == payload)[0];
          commit("setSingleCategory", showSingleList)
          if (!showSingleList) {
            let msg = `Sorry, "${payload}" Category is not found.`;
            commit("setErrorMessage", msg)

          }
        })
        .catch((err) => {
          let msg = "Couldn't find the Category you're looking for, " + err.message;
          commit("setErrorMessage", msg)
        });
    },

    // Show Details of selected show
    viewDetails({ commit }, payload) {
      commit("setShowDetails", {})
      getShow(payload)
        .then((res) => {
          commit("setShowDetails", res)
        })
        .catch((err) => {
          let msg = "Couldn't find the show you're looking for, " + err.message;
          commit("setErrorMessage", msg)

        });
    },

    // Get search list
    searchShows({ commit }, payload) {
      getSearchResult(payload.keyword)
        .then((res) => {
          commit("setSearchList", res)
        })
        .catch((err) => {
          let msg = "Couldn't find the show you're looking for, " + err.message;
          commit("setErrorMessage", msg)
        });
    }
  }

})