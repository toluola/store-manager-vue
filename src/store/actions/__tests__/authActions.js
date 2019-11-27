import authActions from '../authActions'

describe('authActions.js', () => {
  it('should dispatch auth action', () => {
    const commit = jest.fn()
    const payload = 'payload'
    const errorPayload = 'Error Payload'

    authActions.userSignedin({ commit }, { payload })
    authActions.userSigninError({ commit }, { errorPayload })
    expect(commit).toHaveBeenCalledWith(
      'signin', { payload })
    expect(commit).toHaveBeenCalledWith(
      'signinError', { errorPayload })
  })
})
