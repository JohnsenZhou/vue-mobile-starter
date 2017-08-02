<template>
  <li class="list-item clearfix" @click="showPostDetail(item.id)">
    <span class="list-id">{{item.id}}</span>
    <span class="list-title">{{item.title}}</span>
    <p class="post-body">{{item.body}}</p>
  </li>
</template>

<script>
export default {
  name: 'list-item',
  props: ['item'],
  data() {
    return {

    }
  },
  methods: {
    showPostDetail(id) {
      this.$router.push({
        name: 'post-detail',
        params: {
          postId: id
        }
      })
    }
  },

}
</script>

<style>
  
</style>

