import { createStore } from 'vuex'
import mutations from "./muations"
import actions from "./actions"
import getters from "./getters"

export default createStore({
  state: {
    cartlist: []
  },
  mutations,
  actions,
  getters,
})
