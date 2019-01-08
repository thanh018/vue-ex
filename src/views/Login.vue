<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Login</h1>
          <p class="text-xs-center">
            <a href="">You dont have any account?</a>
          </p>
          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>
          <form v-on:submit.prevent="checkUser(user)">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                name="username"
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                name="email"
                v-model="user.email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                name="password"
                v-model="user.password"
              />
            </fieldset>
            <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Login',
  computed: {
    ...mapState('login', ['user', 'currentUser'])
  },
  methods: {
    ...mapActions('login', ['sendLogin']),
    checkUser(user) {
      this.sendLogin(user).then(response => {
        this.$router.push('/')
        console.log('response', response)
      })
    }
  }
}
</script>
