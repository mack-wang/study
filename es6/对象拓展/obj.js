//属性的简洁表示方法
let foo = "bar";
let bar = {foo};
console.log(bar);//bar直接使用foo来当作属性了

//属性名可以使用表达式
//原先
let obj1 = {
    objName: "tom"
};
//es6
let obj2 = {
    ["obj"+"Name"]:"tom"
};
console.log(obj1,obj2);

//判断两个对象是否相等
console.log(Object.is(obj1, obj2));

let obj3 = obj1;
console.log(Object.is(obj1, obj3));

//从一个对象中复制属性到另一对象
let obj4 = {
    other:"other"
};
console.log(Object.assign(obj1,obj4));
//assign可以实现，复制，克隆，合并对象

//对象的拓展运算符,不支持
// let z = {a:3,b:4,c:5};
// let y = {...z};
// console.log(y);