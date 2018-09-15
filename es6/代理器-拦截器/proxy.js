//用于在语言层面进行修改
//比如obj.property 语言层是obj中的get方法获取了property属性，
//使用proxy可以修改get方法
let obj = new Proxy({},{//新建一个对象，并对这个对象的默认方法进行重写
    get:function (target,key,receiver) {//重写get方法
        console.log("我得到属性啦");//插入我们自定义的内容，相当于拦截了默认的方法，并在原先的方法中入我们的方法
        return Reflect.get(target,key,receiver);//返回默认的方法，当然也可以不返回这个，那么默认的方法将完全被重写
    }
});

obj.age = 23;
console.log(obj.age);

//proxy的方法有
//get(target,propKey,receiver) 拦截对象属性的读取
//set(target,propKey,receiver) 拦截对象属性的设置
//has(target,propKey) 拦截 propKey in proxy的操作，返回布尔值
//enumerate(target) hasOwn(target,propKey) ownKey(target) get OwnPropertyDescriptor(target,propKey)
//...还有十来个略

//我的理解proxy提供了对语言默认方法的拦截，并插入我们自己的写的代码