//generator总是返回一个遍历器，则iterator对象

function* hello () {
    yield 'step one';
    yield 'step two';
    yield 'step three';
    return 'end';
}

let h = hello();

//进行第一步
h.next();


//进行第二步
h.next();

//进行第三步
console.log(h.next());

//只要出现h.next()就会执行。如果直接使用hello()的话，永远只在第一步
// let i = setInterval(function () {
//     console.log(h.next());
// },1000);

//用处，状态机，记录当前执行的步骤

function* say (user) {
    for(let i=0;i<5;i++){
        if(i===2){
            yield 100
        }else{
            yield i;
        }
    }
    return 'end';
}

let s = say();
//next方法参数
console.log(s.next("wang"));
console.log(s.next());
console.log(s.next());
console.log(s.next());
console.log(s.next());
console.log(s.next());

//generator.return("foo")会直接设置这个生成器的value="foo"，并直接设置done=true结束执行

//yield* 用来在一个generator函数中引用另一个generator

//generator最大的用处就是异步操作的同步化表达，不用写回调


//如果使用generator,要自己准备一个自动执行器，因为generator要多次调用next()才会依次执行下去，但不能总是手动写，所以有了co自动执行器
//更好的方法是使用async来替代generator,async自带自动执行器，但async是es7才有的功能，但babel已经支持

