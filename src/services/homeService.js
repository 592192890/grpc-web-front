import {echoPromiseService} from '@/assets/grpc/client';

var sayHelloService= {};
sayHelloService.echo = function(requestParam,headers){
    return new Promise((resolve, reject)=>{
        echoPromiseService.echo(requestParam, headers)
            .then(res=>{
                resolve(res);
            })
            .catch(err=>{
                reject(err);
            })
    })
}
export default sayHelloService