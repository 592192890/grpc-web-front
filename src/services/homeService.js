import {echoService} from '@/assets/grpc/client';

var sayHelloService= {};
sayHelloService.echo = function(requestParam,headers){
    console.log(1111)
    return new Promise((resolve, reject)=>{
        echoService.echo(requestParam, headers)
            .on('data',function(response){
                resolve(response)
            })
            .on('error',e=>{
                reject(e)
            })
    })
}
export default sayHelloService