import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations/AuthMutations'
import actions from './actions/authActions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})
