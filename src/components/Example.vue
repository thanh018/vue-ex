<template>
  <div class="hello">
    <div class="left">
      <h1 class="mb-20">{{ title }}</h1>
      <form @submit.prevent="addLink">
        <input
          class="link-input mb-20"
          placeholder="Add a link"
          type="text"
          v-model="newLink"
          value=""
        />
      </form>
      <ul>
        <li v-for="(item, index) in links" :key="index">
          {{ item }}
          <button v-on:click="removeLinks(index)" class="rm">
            Remove
          </button>
        </li>
      </ul>
    </div>
    <div class="right">
      <Links />
    </div>
  </div>
</template>

<script>
import Links from '@/components/Links'
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Example",
  data() {
    return {
      newLink: ''
    }
  },
  components: {
    Links
  },
  computed: {
    ...mapState("example", ["title", "links"])
  },
  methods: {
    ...mapMutations('example', ['ADD_LINK']),
    ...mapActions('example', ['removeLink']),
    addLink() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    removeLinks(link) {
      this.removeLink(link)
    }
  }
};
</script>

<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }
  #app footer {
    position: relative;
  }
  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #333;
    cursor:pointer;
  }

  .mb-20 {
    margin-bottom: 20px;
  }
</style>
