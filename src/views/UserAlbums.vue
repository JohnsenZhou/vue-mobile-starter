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
        userAblums: 'users/userAblums',
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
      this.$store.dispatch('users/getUserAlbumsList', this.userId);
    },
    destroyed() {
      // childId 为三个子路由模块的代号。1 代表todos；2 代表 posts；3代表albums
      // this.$store.commit('RESET_USER_DETAIL_CHILDREN', { childId: 3 });
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
