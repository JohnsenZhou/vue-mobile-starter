<template>
  <div class="container">
    <users-item v-for="item in usersList" :key="item.id" :item="item"></users-item>
    <clip-loader class="spinner" :loading="showSpinner" :color="color" :size="size"></clip-loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import UsersItem from '../components/UsersItem.vue';
  
  
  export default {
    name: 'users',
    data() {
      return {
        color: '#00b4ff',
        size: '30px'
      }
    },
    components: {
      UsersItem,
      // ClipLoader
    },
    computed: {
      ...mapGetters({
        usersList: 'users/allUsers',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        
      ])
    },
    created() {
      this.$store.dispatch('users/getUsers');
    },
    destroyed() {
      this.$store.dispatch('users/resetSpinner');
    }
  }
</script>

<style>

</style>
