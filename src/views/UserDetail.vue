<template>
  <div class="container">
    <img class="albun-png" src="../assets/img/album.png" alt="">
    <!-- <span class="album-detail-title">详情</span> -->
    <div class="list-item">
      {{userDetail}}
    </div>
    <div>
      {{userTodos}}
      <router-view></router-view>
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
        userId: this.$route.params.userId,
        color: '#00b4ff',
        size: '30px',
      }
    },
    components: {
      CommentItem,
    },
    computed: {
      ...mapGetters({
        userDetail: 'userDetail',
        userTodos: 'userTodos',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        
      ])
    },
    created() {
      this.$store.dispatch('getUserDetail', this.userId);
      this.$store.dispatch('getUserTodoList', this.userId);
    },
    destroyed() {
      this.$store.dispatch('resetAlbumDetail');
      this.$store.dispatch('resetSpinner');
    }
  }
</script>

<style>
  .albun-png {
    width: 3em;
  }
  /* .album-detail-title {
    height: 3em;
    line-height: 3em;
    padding-left: .6em;
    vertical-align: top;
    font-size: 1.2em;
    font-weight: 500;
  } */
</style>
