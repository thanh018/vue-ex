<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">

        <router-link to="/">Home |</router-link>
        <router-link to="/register">| Register |</router-link>
        <router-link to="/login">| Login |</router-link>
        <router-link to="" v-if="user.username">| {{user.username}}</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'Header',
  computed: {
    ...mapState('login', ['user']),
    ...mapGetters('login', ['getUser'])
  },
  mounted() {
    this.getUserLogin()
  },
  methods: {
    ...mapActions('login', ['getUserLogin'])
  }
}
</script>
