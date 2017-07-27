<template>
  <div class="container">
    <albums-item v-for="item in albums" :key="item.id" :item="item"></albums-item>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import AlbumsItem from '../components/AlbumsItem.vue';
  
  export default {
    name: 'albums',
    components: {
      AlbumsItem
    },
    computed: {
      ...mapGetters({
        albums: 'allAlbums'
      })
    },
    methods: {
      ...mapActions([
        'getAlbums'
      ])
    },
    created() {
      this.$store.dispatch('getAlbums')
    }
  }
</script>

<style>

</style>
