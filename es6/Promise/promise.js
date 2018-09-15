//Promise用来传递异步消息，只有3种状态，进行中、已经完成、已经失败。
//完成会触发完成的回调、失败会触发失败的回调

let getJson = function (url) {
    let promise = new Promise(function (resolve,reject) {
        let client = new XMLHttpRequest();
        client.open("GET",url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept","application/json");
        client.send();
        
        function handler() {
            if(this.readyState !== 4){
                return;
            }
            if(this.readyState === 200){
                resolve(this.response);//成功后传入参数
            }else{
                reject(new Error(this.statusJson));//失败后传入参数
            }
        }
    });

    return promise;
};

getJson("/get?id=1").then(function (json) {//promise有个then方法，接受两个参数，第一个是成功后的回调，第二个是失败后的回调，第二个可不写
    console.log(json);
},function (error) {
    console.log(error);
});

//then可以被链式调用，只要返回的是一个promise，比如我先进行异步一，然后根据结果进行异步二。。。

//promise有个catch，是then(null,rejection)的别名，前者then处理成功的回调，后者catch处理失败的回调
getJson("/get?id=1").then(function (json) {
    console.log(json);
}).catch(function (error) {
    console.log(error);
});

//Promise.all()可以传入一个promise数组，里面都是promise对象，全部成功才算成功，一个失败都算失败。
Promise.all(promises).then();

//Promise.race()的用法和all()差不多

//Promise.resolve可以将现有的对象转为Promise对象
//最常用的就是把jQuery中的$.ajax()对象转化成Promise对象
//let jqPromise = Promise.resolve($.ajax());

//书中写了两个不在es6中，但比较实用的promise的拓展方法
//链式最后调用，确保捕获所有错误
Promise.prototype.done = function (onFulfilled,onRejected) {
    this.then(onFulfilled,onRejected)
        .catch(function (reason) {
            setTimeout(()=>{throw reason},0);
        })
};

//链式最后调用，确保执行某个方法
Promise.prototype.finally = function (callback) {
    let p = this.constructor;
    return this.then(
        value => p.resolve(callback()).then(()=>value),
        reason => p.resolve(callback()).then(()=>{throw reason})
    );
};


