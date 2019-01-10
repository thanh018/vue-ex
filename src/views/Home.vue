<template>
  <div class="home-page">
    <Example />
    <Banner />
    <Post />

    <div class="container page">
      <div class="row">
        <Articles />
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a href="" class="tag-pill tag-default">programming</a>
              <a href="" class="tag-pill tag-default">javascript</a>
              <a href="" class="tag-pill tag-default">emberjs</a>
              <a href="" class="tag-pill tag-default">angularjs</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">mean</a>
              <a href="" class="tag-pill tag-default">node</a>
              <a href="" class="tag-pill tag-default">rails</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Banner from '@/components/Banner'
import Articles from '@/components/Articles'
import Post from '@/components/Post'
import Example from '@/components/Example'
export default {
  name: 'Home',
  components: {
    Banner,
    Articles,
    Post,
    Example
  }
}
</script>
