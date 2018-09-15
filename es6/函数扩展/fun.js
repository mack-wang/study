//设置默认参数,设置了默认值tom和rest参数...args这样的参数都不会被统计到函数参数个数的length中
function fun(tom="tom",bob) {
    console.log(tom,bob);
}
fun();

//解构赋值设置默认参数
function fun2({foo,bar = 2}) {
    console.log(foo,bar);
}
fun2({});//不能无参，不然报错

//rest参数
function fun3(...num) {
    for( let i of num){
        console.log(i);
    }
}

fun3(1,2,3,4);

//rest的逆应用，把数组拆分成逗号分隔的参数
console.log(...[5,6,7]);//3个数字
console.log([5,6,7]);//1个数组

//原先如果原生函数不能直接传入数组，则要用apply变相的传入数组
//例如 Math.max.apply(null,[1,2,3])  等价 Math.max(1,2,3)
//而现在使用扩展运算符
console.log(Math.max(...[1, 2, 3]));

//合并数组
let a = [1,2,3], b = [3,4,5];
console.log(a.concat(b));
console.log([1,2,3,...b]);

//字符串转成字符数组
console.log([..."hello"]);

//箭头函数
let f = v => v;
//等价于 var f = function (v){return v;}

//无参数的箭头函数
let f2 = () => 5;
//等价于 var f2 = function (){return 5;}

//大于1个的参数
let f3 = (param1,param2) => {return param1 + param2};

//由于箭头函数没有this所以他的this就是外围的this




