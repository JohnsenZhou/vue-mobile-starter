<template>
  <div class="container">
    <albums-item v-for="item in albums" :key="item.id" :item="item"></albums-item>
    <clip-loader class="spinner" :loading="showSpinner" :color="color" :size="size"></clip-loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import AlbumsItem from '../components/AlbumsItem.vue';
  
  export default {
    name: 'albums',
    data() {
      return {
        color: '#00b4ff',
        size: '30px'
      }
    },
    components: {
      AlbumsItem
    },
    computed: {
      ...mapGetters({
        albums: 'allAlbums',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        'getAlbums'
      ])
    },
    created() {
      this.$store.dispatch('getAlbums')
    },
    destroyed() {
      this.$store.dispatch('resetSpinner');
    }
  }
</script>

<style>

</style>
