<template>
  <div>
    <Item v-for="item in postsList" :key="item.id" :item="item"></Item>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Item from '../components/PostsItem.vue';
  
  export default {
    name: 'posts',
    components: {
      Item
    },
    computed: {
      ...mapGetters({
        postsList: 'allPosts'
      })
    },
    methods: {
      ...mapActions([
        'getPosts'
      ])
    },
    created() {
      this.$store.dispatch('getPosts')
    }
  }
</script>

<style>

</style>
