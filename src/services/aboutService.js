import {echoService} from '@/assets/grpc/client';
var aboutService=function(requestParam,headers){
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
                console.log(result)
                resolve({result:result});
            })
    })
}
export default aboutService