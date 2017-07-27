<template>
  <div class="container">
    <div>{{postDetail}}</div>
    <clip-loader class="spinner" :loading="showSpinner" :color="color" :size="size"></clip-loader>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    name: 'post-detail',
    data() {
      return {
        postId: this.$route.params.postId,
        color: '#00b4ff',
        size: '30px'
      }
    },
    components: {

    },
    computed: {
      ...mapGetters({
        postDetail: 'postDetail',
        showSpinner: 'isSpinner'
      })
    },
    methods: {
      ...mapActions([
        
      ])
    },
    created() {
      // console.log(this.$route.params)
      this.$store.dispatch('getPostDetail', this.postId)
    },
  }
</script>

<style>

</style>
