<template>
  <div class="container">
    <Item v-for="item in postsList" :key="item.id" :item="item"></Item>
    <clip-loader class="spinner" :loading="showSpinner" :color="color" :size="size"></clip-loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Item from '../components/PostsItem.vue';
  
  export default {
    name: 'posts',
    data() {
      return {
        color: '#00b4ff',
        size: '30px'
      }
    },
    components: {
      Item
    },
    computed: {
      ...mapGetters({
        postsList: 'posts/allPosts',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        'posts/getPosts'
      ]),
    },
    created() {
      this.$store.dispatch('posts/getPosts')
    },
    destroyed() {
      this.$store.dispatch('resetSpinner');
    }
  }
</script>

<style>

</style>
