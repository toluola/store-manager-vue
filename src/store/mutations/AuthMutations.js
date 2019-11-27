export default {
  signin: (state, user) => {
    state.Auth.signin = user
  },
  signinError: (state, error) => {
    state.Auth.signinError = error
  }
}
