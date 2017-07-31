<template>
  <div class="container">
    <img class="albun-png" src="../assets/img/album.png" alt="">
    <!-- <span class="album-detail-title">详情</span> -->
    <div class="list-item" v-for="item in albumDetail" :key="item.id">
      <img class="album-img" :src="item.thumbnailUrl" alt="">
      <span class="album-detail-title">{{item.title}}</span>
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
        albumId: this.$route.params.albumId,
        color: '#00b4ff',
        size: '30px',
      }
    },
    components: {
      CommentItem,
    },
    computed: {
      ...mapGetters({
        albumDetail: 'albumDetail',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        
      ])
    },
    created() {
      this.$store.dispatch('getAlbumDetail', this.albumId);
    },
    destroyed() {
      this.$store.dispatch('resetAlbumDetail');
      this.$store.dispatch('resetSpinner');
    }
  }
</script>

<style>
  .albun-png {
    width: 5em;
  }
  .album-img {
    width: 3em;
    height: 3em;
  }
  .album-detail-title {
    padding-left: 1em;
    height: 3em;
    line-height: 3em;
    vertical-align: top;
    /* 超出部分... */
    width: 70%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
  } 
</style>
