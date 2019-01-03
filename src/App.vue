<template>
  <div id="app">
    <Header />
    <router-view @authenticated = "setAuthenticated"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "thanh018",
        password: "123456789"
      }
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace({name: "login"})
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status
    }
  }
}
</script>
