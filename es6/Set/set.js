let s = new Set();
s.add(1);
s.add(2);
s.add("a");
s.add(4);
s.add(4);//set不存在重复值，如果重复了，则会后者覆盖前者
console.log(s);

//set的遍历方法
//有keys,values,entries,forEach
for(let item of s.keys()){//set的键名就是其值
    console.log(item);
}

for(let item of s.values()){
    console.log(item);
}

for(let item of s.entries()){
    console.log(item);
}

s.forEach(function (item) {
   console.log(item+"1")
});

//set拓展符
console.log(...s);

//set 合并
let a = new Set(["a","b"]), b = new Set(["a","c","d"]);
let c = new Set([...a,...b]);
console.log(c);

//set 交集
let d = new Set([...a].filter(x=>b.has(x)));
console.log(d);

//set 差集
let e = new Set([...a].filter(x=>!b.has(x)));
console.log(e);

//WeakSet 一个只能存放对象的set,并且不能遍历，不会产生内存泄漏