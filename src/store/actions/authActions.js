export default {
  userSignedin: ({ commit }, user) => {
    commit('signin', user)
  },
  userSigninError: ({ commit }, error) => {
    commit('signinError', error)
  }
}
