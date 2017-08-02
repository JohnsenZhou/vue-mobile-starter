<template>
    <ul>
      <li class="user-ablums" v-for="item in userAblums" @click="showAlbumDetail(item.id)" :key="item.id">
        <span class="user-ablums-id">{{item.id}}</span>
        <span class="list-title">{{item.title}}</span>
      </li>
    </ul>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'ablums-detail',
    data() {
      return {
        userId: this.$route.params.userId,
      }
    },
    components: {

    },
    computed: {
      ...mapGetters({
        userAblums: 'userAblums',
      })
    },
    methods: {
      ...mapActions([
        
      ]),
      showAlbumDetail(id) {
        this.$router.push({
          name: 'album-detail',
          params: {
            albumId: id
          }
        })
      }
    },
    created() {
      this.$store.dispatch('getUserAlbumsList', this.userId);
    },
    destroyed() {

    }
  }
</script>

<style>
  .user-ablums {
    margin-bottom: 1em;
    padding: 1em;
    border: 1px solid #ffc9c9;
    border-radius: 4px;
    background: #f6f6f6;
  }
  .user-ablums-id {
    float: left; 
    width: 1.8em;
    height: 1.8em;
    background: #f99185;
    line-height: 1.8em;
    border-radius: 25px 25px;
    color: #fff;
  }
</style>
