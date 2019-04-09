<template>
  <div class="index">
    <h1 class="m-h1" v-if="msg.substring(6)">0</h1>
    <router-link :to="'/booklist'" >1</router-link>
    <router-link :to="'/login'" >2</router-link>
    <router-link :to="'/myinfo'" >3</router-link>
    <router-link :to="'/compDemo'" >4</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.m-h1{
line-height:40px;
font-weight:bold;
font-size:20px;
text-align:center;
}


.index a {
  display: block;
  text-align: center;
  text-decoration: none;
  line-height: 25px;
}
</style>
