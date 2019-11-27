import mutations from '@/store/mutations/AuthMutations'

describe('', () => {
  const state = {
    Auth: {
      signin: {},
      signinError: {}
    }
  }
  it('add signin and singin error to the state', () => {
    const signin = { user_id: 1 }
    const signinError = 'this is an error'
    mutations.signin(state, { signin })
    mutations.signinError(state, { signinError })

    expect(state).toEqual({
      Auth: {
        signin: { signin: { user_id: 1 } },
        signinError: { signinError: 'this is an error' }
      }
    })
  })
})
