import { shallowMount } from '@vue/test-utils'
import LandingPage from '@/components/LandingPage'

describe('LandingPage.vue', () => {
  const wrapper = shallowMount(LandingPage)
  it('LandingPage is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('displays the signin text', () => {
    expect(wrapper.html().includes('Sign In'))
  })

  it('calls the signin function', () => {
    const signinUser = jest.fn()
    wrapper.setMethods({ signinUser })
    const input = wrapper.find('#password')
    input.trigger('keydown.enter')

    expect(signinUser.mock.calls.length).toBe(1)
  })
})
