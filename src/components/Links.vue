<template>
  <div>
    <p>{{countLinks}} links</p>
    <button class="remove-all" v-on:click="removeAllLinks">Remove all links</button>
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations ,mapActions } from "vuex";
export default {
  name: "Links",
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    ...mapGetters("example", ["countLinks"])
  },
  methods: {
    ...mapMutations('example', ['REMOVE_ALL']),
    ...mapActions('example', ['removeAll']),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = 'They have been removed'
      })
    }
  }
};
</script>

<style>
  .remove-all {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
  }

  .msg {
    margin-top: 20px;
  }
</style>

