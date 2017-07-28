<template>
  <div class="container">
    <div class="list-item">
      <span class="list-id list-id-detail">{{postDetail.id}}</span>
      <span class="list-title list-title-detail">{{postDetail.title}}</span>
      <p class="post-body-detail">{{postDetail.body}}</p>
    </div>
    <div class="comment-box clearfix">
      <span class="comment-title">Post comments</span>
      <ul class="comment-list clear">
        <comment-item v-for="item in postDetail.comments" :key="item.id" :item="item"></comment-item>
      </ul>
    </div>
    <clip-loader class="spinner" :loading="showSpinner" :color="color" :size="size"></clip-loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import CommentItem from '../components/CommentItem.vue';
  export default {
    name: 'post-detail',
    data() {
      return {
        postId: this.$route.params.postId,
        color: '#00b4ff',
        size: '30px',
      }
    },
    components: {
      CommentItem,
    },
    computed: {
      ...mapGetters({
        postDetail: 'postDetail',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        
      ])
    },
    created() {
      this.$store.dispatch('getPostDetail', this.postId);
    },
    destroyed() {
      this.$store.dispatch('resetDetail');
      this.$store.dispatch('resetSpinner');
    }
  }
</script>

<style>
  .list-id-detail {
    float: none;
    margin-bottom: .3em;
  }
  .list-title-detail {
    white-space: normal;
  }
  .post-body-detail {
    margin-top: .8em;
    text-align: left;
    /* text-indent: 1em; */
    overflow : hidden;
    /* 多行文本截断 */
    text-overflow: ellipsis;
    display: -webkit-box;
  }
  .comment-title {
    float: left;
    padding-left: 2em;
    font-weight: 600;
    background-size: 1.6em 1.5em;
    background-repeat: no-repeat;
    vertical-align: middle; 
    background-image: url('../assets/img/comment_pressed.png')
  }
  .comment-list {
    margin-top: 3em;
  }
</style>
