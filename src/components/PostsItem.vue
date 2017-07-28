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
  .post-body {
    margin-top: .8em;
    text-align: left;
    /* text-indent: 1em; */
    overflow : hidden;
    /* 多行文本截断 */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>

