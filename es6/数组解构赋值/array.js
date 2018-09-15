//正常
let [tom, cindy, bob] = [1, 2, 3];
console.log(tom, cindy, bob);

//嵌套
let [ming, [[hong]], ding] = [4, [[5]], 6];
console.log(ming, hong, ding);

//跳过
let [, , ling] = ["", "", 7];
console.log(ling);

//头尾
let [a, ...b] = [8, 9, 10, 11];
console.log(a, a);//8

//默认值
let [c = 12, d, e] = [undefined, 13, 14];
console.log(c, d, e);

//对象
let {f, g} = {f: 15, g: 16};
console.log(f,g);

//{模式：变量} = {变量：变量值} 若前者只有模式，那么默认变量名就是模式名
let {name1:name1,name2:name3} = {name1:"17",name3:"18"};
console.log(name1,name3);
