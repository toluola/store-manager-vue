<template>
  <div class='signin-container'>
    <div class='signin-header'>
      <h3>Sign In</h3>
    </div>

    <form @submit.prevent = 'validateForm'>
      <div v-if = 'error.length > 0'>{{ error }}</div>
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
</template>

s

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      error: []
    }
  },
  methods: {
    validateForm: function () {
      this.error = []
      if (!this.username) {
        this.error.push('Please Enter Your Username')
      }

      if (this.validUsername(this.username)) {
        this.error.push('Username should be without spaces')
      }

      if (!this.password) {
        this.error.push('Please Enter a password')
      }
    },
    validUsername: function (username) {
      let check = /\s/
      return check.test(username)
    }
  }
}
</script>
