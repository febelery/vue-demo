import { createStore } from "vuex"

const defaultState = {
  count: 1
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count *= 2
    }
  },
  actions: {
    increment(context) {
      context.commit("increment")
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
