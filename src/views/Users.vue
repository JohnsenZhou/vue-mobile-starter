<template>
  <div>
    <users-item v-for="item in usersList" :key="item.id" :item="item"></users-item>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import UsersItem from '../components/UsersItem.vue';
  
  export default {
    name: 'users',
    components: {
      UsersItem
    },
    computed: {
      ...mapGetters({
        usersList: 'allUsers'
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
