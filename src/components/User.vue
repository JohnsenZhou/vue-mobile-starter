<template>
  <div>
    <h1>添加信息</h1>
    <table>
      <tr>
        <td>serialNo</td>
        <td>
          <input type="text" v-model="serialNo">
        </td>
        <td>id</td>
        <td>
          <input type="text" v-model="id">
        </td>
      </tr>
      <tr>
        <td>name</td>
        <td>
          <input type="text" v-model="name">
        </td>
        <td>webUrl</td>
        <td>
          <input type="text" v-model="webUrl">
        </td>
      </tr>
    </table>
    <button @click="pushData">
      提交
    </button>
  </div>
</template>

<script>
  import * as userServices from '../services/user';
  
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
        userServices.fetch().then((res) => {
          console.log(res)
        })
      },
      pushData() {
        let data = {};
        data.webUrl = this.webUrl;
        data.name = this.name;
        data.serialNo = this.serialNo;
        data.id = parseInt(this.id);
        userServices.push(data).then((res) => {
          console.log(res)
        })
      }
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
