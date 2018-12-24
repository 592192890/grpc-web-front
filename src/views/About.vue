<template>
  <div class="about">
    {{msg.join(',')}}
    <p>
      <button @click="goBack">返回</button>
    </p>
  </div>
</template>
<script>
import aboutService from '@/services/aboutService.js'
export default{
  data(){
    return {
      msg:[]
    }
  },
  methods: {
    goBack(){
      this.$router.push({path:'/'})
    }
  },
  mounted(){
    var unaryRequest = new this.$ServerStreamingEchoRequest();
    unaryRequest.setMessage('这是about模块');
    unaryRequest.setMessageCount(2);
    unaryRequest.setMessageInterval(10);
    var self = this;
    var headers={
      "custom-header-1": "value1"
    }
    aboutService.streamEcho(unaryRequest,headers).then(res=>{
      this.msg=res.result;
    }).catch(err=>{
      console.error(err)
    })
   
  }
}
</script>