<template>
  <div>
    <form @submit.prevent="addPost">
      <p>
        <input
          type="text"
          value=""
          v-model="postBody"
        >
      </p>
      <p>
        <textarea
          type="text"
          value=""
          v-model="postTitle"
        >
        </textarea>
      </p>
      <p><button type="submit">Submit</button></p>
      
      <p v-if="errors.length" style="color: red">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key='index'>
            {{ error }}
          </li>
        </ul>
      </p>
    </form>

    
    <ul v-if="posts && posts.length">
      <li v-for="(post, index) in posts" :key='index'>
        <p>
          <strong>{{post.title}}</strong>
        </p>
        <p>{{post.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Post",
  data() {
    return {
      postTitle: '',
      postBody: '',
      posts: [],
      errors: []
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/posts`)
        .then(res => {
          this.posts = res.data
        })
        .catch(e => {
          this.errors.push(e)
        });
  },
  methods: {
    async addPost(e) {
      this.errors = [];
      if (!this.postTitle) {
        this.errors.push('Name required.');
      }
      else if (!this.postBody) {
        this.errors.push('Age required.');
      }
      else {
        try {
          let res = await axios.post(`http://localhost:3000/posts`, {
            title: this.postTitle,
            body: this.postBody
          })

          this.postTitle = ''
          this.postBody = ''
          this.posts.push(res.data)
        } catch(e) {
          this.errors.push(e)
        }
      }
      e.preventDefault();
    }
  }
};
</script>

