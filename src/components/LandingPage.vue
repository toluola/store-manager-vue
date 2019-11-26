<template>
  <div class='signin-container'>
    <div class='signin-header'>
        <h3>Sign In</h3>
    </div>
    <div class="sub-signin-container">

      <form @submit.prevent = 'signinUser()'>
        <div v-if = 'errors.length > 0'>{{ errors }}</div>
        <div>
          <label for='username' class='label'>Username</label>
          <input type='text' class='input' v-model="username" id='username' placeholder='toluola' autofocus>
        </div>
        <div>
          <label for='password' class='label'>Password</label>
          <input type='password' class='input' v-model="password" id='password'>
          <input type="submit" value="Enter" class="signin-submit">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import JWT from 'jwt-decode'
import Axios from '@/axios'

export default {
  data () {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  methods: {
    validateForm: function () {
      this.errors = []
      if (!this.username) {
        this.errors.push('Please Enter Your Username')
      }

      if (this.validUsername(this.username)) {
        this.errors.push('Username should be without spaces')
      }

      if (!this.password) {
        this.errors.push('Please Enter a Password')
      }
    },
    validUsername: function (username) {
      let check = /\s/
      return check.test(username)
    },
    ...mapActions([
      'userSignedin',
      'userSigninError'
    ]),
    signinUser: async function () {
      try {
        const { username, password } = this
        await this.validateForm()
        if (this.errors.length === 0) {
          const axiosCall = await Axios.post('/auth/login', { username, password })
          const decodeUser = await JWT(axiosCall.data.data.token)
          localStorage.setItem('storeToken', axiosCall.data.data.token)
          this.userSignedin(decodeUser)
          this.$router.push('/dashboard')
        }
      } catch (error) {
        this.userSigninError(error.response.data)
        this.errors.push(error.response.data.message)
        localStorage.removeItem('storeToken')
      }
    }
  }
}
</script>

<style scoped>
  .signin-container {
    background-image: url('~@/assets/img/store.jpg');
    height: 789px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .sub-signin-container {
    margin-left: 500px;
    width: 300px;
    margin-top: 20px;
    background: white;
  }
</style>
