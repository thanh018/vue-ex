<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <router-link to="/">Home |</router-link>
        <router-link to="/register">| Register |</router-link>
        <router-link to="/login">| Login |</router-link>
        <router-link to="" v-if="getUser.username">| {{getUser.username}} |</router-link>
        <router-link to="/" v-if="getUser.username">
           <button v-on:click="onLogOut">Log out</button>
        </router-link>
      </ul>
    </div>
    {{getUser}}
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'Header',
  computed: {
    ...mapState('login', ['user', 'currentUser']),
    ...mapGetters('login', ['getUser'])
  },
  mounted() {
    this.getUserLogin()
  },
  methods: {
    ...mapActions('login', ['getUserLogin', 'logOut']),
    onLogOut() {
      this.logOut()
      this.$router.push('/')
    }
  }
}
</script>
