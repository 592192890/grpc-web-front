<template>
  <div class="about">
    {{msg.join(',')}}
    <p>
      <button @click="goBack">返回</button>
    </p>
  </div>
</template>
<script>
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

    var stream = this.$echoService.serverStreamingEcho(
        unaryRequest, 
        {
          "custom-header-1": "value1"
        }
    );
    var self = this;
    stream.on('data', function(response) {
      self.msg.push(response.getMessage());
    });
    stream.on('status', function(status) {
      
      if (status.metadata) {
        console.log("Received metadata");
        console.log(status.metadata);
      }
    });
    stream.on('error', function(err) {
      console.log('Error code: '+err.code+' "'+
                                      err.message+'"');
    });
    stream.on('end', function() {
      console.log("stream end signal received");
    });
  }
}
</script>