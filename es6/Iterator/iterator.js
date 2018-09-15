//一个数据只要具有Symbol.iterator就具有可遍历的特性
let arr = ["a","b","c"];
let a = arr[Symbol.iterator]();
/*
{ value: 'a', done: false }
{ value: 'b', done: false }
{ value: 'c', done: false }
{ value: undefined, done: true }
 */
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());