import {echoService} from '@/assets/grpc/client';
var aboutService={};
aboutService.streamEcho = function(requestParam,headers){
    var result=[]
    return new Promise((resolve, reject)=>{
        echoService.serverStreamingEcho(requestParam, headers)
            .on('data',function(response){
                result.push(response.getMessage());
            })
            .on('error',e=>{
                reject(e);
            })
            .on('end',function(){
                console.log("end...");
                console.log(result);
                console.log('ending...')
                resolve({result:result});
            })
    })
};
export default aboutService;