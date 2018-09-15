//将类数组的对象转化成真正的数组
let obj = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

console.log(Array.from(obj));

//Array.from可以传入第二个参数，对参数一的每个项进行处理
console.log(Array.from(obj, x => x + "hello"));

//复制指定位置到另一位置覆盖
//把索引2的数字之后用0到1之间的数字覆盖
console.log([1, 2, 3, 4, 5].copyWithin(2, 0, 1));
//把索引2的数字之后用0到2之间的数字覆盖
console.log([1, 2, 3, 4, 5].copyWithin(2, 0, 2));

//用回调函数筛选查找,find返回项，findIndex返回索引
//找到小于0的数字
console.log(
    [1, 2, 3, 4, -5].find(n => n < 0)
);

//填充
console.log([1, 2, 3].fill("a"));
console.log([1, 2, 3].fill("a", 1, 2));

//返回数组的键、值、键值对
//以下无返回结果
console.log(["a", "b", "c"].keys());
console.log(["a", "b", "c"].values());
console.log(["a", "b", "c"].entries());
//用for of 遍历
for (let item of ['a', 'b', 'c'].values()) {
    console.log(item);
}

//数组推导 es7才有的功能，但babel已经支持转换
// let a1 = [1, 2, 3, 4];
// let a2 = [for(i of a1) i+1];
// console.log(a2);