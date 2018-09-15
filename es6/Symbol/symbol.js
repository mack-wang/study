//es6新增数据类型Symbol用于产生不重复的，唯一的属性名，有点类似uuid
//symbol可以传递一个参数，当作这个symbol的名字
let s = Symbol("s");
console.log(typeof s);

//使用symbol作为对象的属性名，s一定要加[]才能被确认为是symbol，否则还是会被当作普通的属性名
let obj = {
    a:"1",
    [s]:"2"
};
console.log(obj);//不显示[s]的属性
console.log(obj[s]);//显示[s]的属性
console.log(Object.getOwnPropertySymbols(obj));//获取所有symbol的名字

//生成相同的symbol
let a = Symbol.for("a"),b = Symbol.for("a");
console.log(a === b);
console.log(Symbol.keyFor(a));//返回a登记的symbol的名字