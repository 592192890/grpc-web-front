<template>
  <div class="home">
    <input type="text" v-model="name" placeholder="请输入用户名">
    <p>{{msg}}</p>
    <button @click="test">sayHello</button>
    <button @click="goAbout">goAbout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      name:'',
      msg: ''
    }
  },
  methods:{
    goAbout(){
      this.$router.push({path:'/about'})
    },
    test(){
      var unaryRequest = new this.$EchoRequest();
      unaryRequest.setMessage(this.name);

      var self = this;
      // call拿到返回值可以通过callback或者监听data事件
      this.$echoService.echo(
          unaryRequest, 
          {
            "custom-header-1": "value1"
          }
      ).on('data',function(response){
        self.msg="Hello "+response.getMessage();
      })
    }
  }
};
</script>
