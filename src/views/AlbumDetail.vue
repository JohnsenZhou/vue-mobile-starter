<template>
  <div class="container">
    <img class="albun-png" src="../assets/img/album.png" alt="">
    <!-- <span class="album-detail-title">详情</span> -->
    <album-item-detail v-for="item in albumDetail" :key="item.id" :item="item"></album-item-detail>
    <clip-loader class="spinner" :loading="showSpinner" :color="color" :size="size"></clip-loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import AlbumItemDetail from '../components/AlbumItemDetail.vue';
  export default {
    name: 'post-detail',
    data() {
      return {
        albumId: this.$route.params.albumId,
        color: '#00b4ff',
        size: '30px',
        dialog: false
      }
    },
    components: {
      AlbumItemDetail,
    },
    computed: {
      ...mapGetters({
        albumDetail: 'albumDetail',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        
      ]),
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
      }
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
  
</style>
