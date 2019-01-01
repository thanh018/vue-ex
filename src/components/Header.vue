<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
        <p v-if="skills.length > 2">you have more than 1 skill</p>
        <p v-else>you have less than or equal to 1 skill</p>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      skills: [
        { "skill": "Vue.js"},
        { "skill": "Front end"}
      ]
    }
  }
}
</script>
