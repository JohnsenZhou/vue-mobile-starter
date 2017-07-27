<template>
  <div class="container">
    <users-item v-for="item in usersList" :key="item.id" :item="item"></users-item>
    <clip-loader class="spinner" v-show="showSpinner" :loading="loading" :color="color" :size="size"></clip-loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import UsersItem from '../components/UsersItem.vue';
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  
  export default {
    name: 'users',
    data() {
      return {
        loading: true,
        color: '#00b4ff',
        size: '30px'
      }
    },
    components: {
      UsersItem,
      ClipLoader
    },
    computed: {
      ...mapGetters({
        usersList: 'allUsers',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        'getUsers'
      ])
    },
    created() {
      this.$store.dispatch('getUsers')
    }
  }
</script>

<style>

</style>
