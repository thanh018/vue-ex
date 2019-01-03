<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" v-model="user.username" placeholder="Your Name">
            </fieldset>
            <!-- <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text"  placeholder="Email">
            </fieldset> -->
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" v-model="user.password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" type="button" v-on:click="login()">
              Sign up
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  computed: {
    ...mapState('login', ['user'])
  },
  mounted() {
    this.getUser()
  },
  methods: {
    ...mapActions('login', ['getUser'])
  }

}
</script>
