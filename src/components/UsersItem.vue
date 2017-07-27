<template>
  <li class="user-item" @click="show = !show">
    <span class="user-id">{{item.id}}</span>
    <span class="user-title">{{item.name}}</span>
    <transition name="slide-fade">
      <div class="user-detail" v-show="show">
        <p class="phone">{{item.phone}}</p>
        <p class="email">{{item.email}}</p>
        <p class="address">{{item.address.city}}<span class="read-more" @click.stop="getUserDetail(item.id)">Read more</span></p>
        <!-- <router-link :to="{ name: 'user-detail', params: { userId: 1 }}">Read more</router-link> -->
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'users-item',
  props: ['item'],
  data() {
    return {
      show: false
    }
  },
  methods: {
    getUserDetail(id) {
      this.$router.push({
        name: 'user-detail',
        params: {
          userId: id
        }
      });
    }
  }

}
</script>

<style>
  .user-item {
    display: block;
    margin: 1em;
    padding: 1em;
    border-radius: 4px;
    background: #fafafa;
    box-shadow: 0 2px 6px #d7d7d7;
  }
  .user-title {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: .6em;
    font-size: 1.2em;
    font-weight: 500;
    text-align: left;
  }
  .user-id {
    float: left; 
    display: inline-block;
    width: 1.8em;
    height: 1.8em;
    background: #00b4ff;
    line-height: 1.8em;
    border-radius: 25px 25px;
    color: #fff;
  }
  .user-id::after {
    content: '.';
    display: block;
    visibility: hidden;
    width: 0;
    height: 0;
    clear: both;
  } 
  .user-body {
    margin-top: .8em;
    text-align: left;
    /* text-indent: 1em; */
    overflow : hidden;
    /* 多行文本截断 */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .user-detail {
    margin-top: 1em;
    text-align: left;
  }
  .user-detail p {
    padding-bottom: .4em;
  }
  .phone, .address, .email {
    padding-left: 1.8em;
    background-size: 1.6em 1.4em;
    background-repeat: no-repeat;
    vertical-align: middle; 
  }
  .phone {
    background-image: url('../assets/img/mobilephone.png');
  }
  .address {
    background-image: url('../assets/img/coordinates.png');
  }
  .email {
    background-image: url('../assets/img/mail.png');
  }
  .read-more {
    float: right;
  }


  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(0.3, 0.3, 0.3, 0.3);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>