<template>
  <div>
    
  </div>
</template>

<script>
  import * as userServices from '../services/user';
  import * as jsonServices from '../services/jsonholder';
  
  export default {
    name: 'user',
    data() {
      return {
        webUrl: '',
        name: '',
        serialNo: '',
        id: '',
      }
    },
    methods: {
      getDataList() {
        jsonServices.getList().then((res) => {
          console.log(res)
        });
        userServices.fetch().then((res) => {
          console.log(res)
        })
      },
      // pushData() {
      //   let data = {};
      //   data.webUrl = this.webUrl;
      //   data.name = this.name;
      //   data.serialNo = this.serialNo;
      //   data.id = parseInt(this.id);
      //   userServices.push(data).then((res) => {
      //     console.log(res)
      //   })
      // }
    },
    computed: {

    },
    mounted() {
      this.getDataList();
    }

  }
</script>

<style>

</style>
