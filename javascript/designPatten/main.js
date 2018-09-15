/**
 * Created by asus on 2018/1/17.
 */



// 构造函数constructor
function Contructor() {
    // public
    this.age = 18;
    // private
    var myname = 'tom';
    //　public
    this.say = function () {
        console.log('say');
    };

    Contructor.prototype.father = 'bob';

    Contructor.prototype.tell = function () {
        console.log('tell');
    }

}

var contructor = new Contructor();
console.log(contructor.age);
console.log(contructor.myname);
console.log(contructor.father);
contructor.say();
contructor.tell();

// 模块化 module
var module = (function () {
    //  private
    var myname = 'tom';
    // private
    var say = function () {
        console.log('say');
    };
    return {
        father: 'bob',
        tell: function () {
            console.log('tell');
        },
        // 将私有方法公开
        publicSay: say
    }
})();

console.log(module.myname);
console.log(module.father);
// module.say(); 私有方法无法使用
module.tell();
module.publicSay();

// 揭示模块 revealing module
var revealingModule = function () {
    function say() {
        console.log('say');
    }

    function tell() {
        console.log('tell');
    }

    return {
        a: say,
        b: tell
    }
}();

revealingModule.a();
revealingModule.b();

// 单例模式 singleton
var singleton = (function () {
    var instance;

    function init() {
        // private
        function say() {
            console.log('say');
        }

        var myname = 'tom';
        var num = Math.random();
        return {
            // public
            publicSay: say,
            publicName: myname,
            publicNum: num
        }
    }

    return {
        getInstance: function () {
            if (!instance) {// 如果已经有实例，则不再初始化。这样全局就只有一个实例，不会重复实例化
                instance = init();
            }

            return instance;
        }
    }
})();

console.log(singleton.getInstance().publicNum);
console.log(singleton.getInstance().publicNum);

// 观察者模式 observer
// ObserverList 观察者列表 ： 就是用来储存观察者们的列表，由Subject管理员进行操作
// Subject 管理员 ： 对观察者进行增删改查操作，通知观察者进行改变。
// Observer 观察者 : 观察目标的变化，接收到通知后，更新自己的状态。更新的内容由观察者自己决定。
// ConcreteSubject 目标 ： 目标发生变化时，向管理员报告，要求管理员发通知给观察者，同时存储自己的状态

// 发布/订阅模式 publish/subscribe

// 1.创建订阅者列表
function Observer() {
    this.list = [];
}

Observer.prototype = {
    // 添加订阅者
    subscribe: function (obj) {
        this.list.push(obj);
    },

    // 取消订阅者
    unsubcribe: function (obj) {
        this.list = this.list.filter(function (item) {
            if (item !== obj) {
                return item;
            }
        })
    },

    publish: function (param) {
        this.list.forEach(function (item) {
            item.message = param;
        })
    }
};

var observer = new Observer();
var man1 = {age: 12, message: ''};
var man2 = {age: 13, message: ''};
observer.subscribe(man1);
observer.subscribe(man2);
observer.publish('hello');

console.log(man1.message, man1.age);
console.log(man2.message, man2.age);
observer.unsubcribe(man2);// 取消订阅
observer.publish('hello2');
console.log(man1.message, man1.age);
console.log(man2.message, man2.age);

// 中介者模式 Mediator
// 在发布订阅模式上进一步封闭，将发布订阅私有，然后公开调用方法

var Mediator = (function () {
    var list = [];
    var subscribe = function (obj) {
        list.push(obj);
    };
    var unsubscribe = function (obj) {
        list = list.filter(function (item) {
            if (item !== obj) {
                return item;
            }
        })
    };
    var publish = function (param) {
        list.forEach(function (item) {
            item.message = param;
        })
    };

    return {
        Subscribe: subscribe,
        Unsubscribe: unsubscribe,
        Publish: publish
    };
})();

Mediator.Subscribe(man1);
Mediator.Subscribe(man2);
Mediator.Publish('hello3');
console.log(man1.message, man1.age);
console.log(man2.message, man2.age);

// 原型模式 prototype
var Person = {
    name: 'tom',
    say: function () {
        console.log('say');
    }
};

// bob自身是空对象，但bob通过Object继承了Person，即bob拥有__proto__这个属性，指向Pserson，所以直接可以使用name和say属性
var bob = Object.create(Person);
console.log(bob);
console.log(bob.name);
bob.say();

var cindy = Object.create(Person, {"age": {"value": "23"}});
console.log(cindy);
console.log(cindy.name);
cindy.say();
console.log(cindy.value);

// Object.create()的使用

var obj1;// 将没有原型
obj1 = Object.create(null);
console.log(obj1);

var obj2;
obj2 = Object.create({});
console.log(obj2);

var obj3 = {};
console.log(obj3);

var obj4 = Object.create({}, {//会有p属性，p属性要用一个对象来定义，value值，writable是否可写
    p: {value: 42, writable: true, enumerable: true, configurable: true}
});
console.log(obj4);

// 命令模式 command
// 该模式旨在将方法调用、请示或者操作封装到单一对象中。
(function () {
    var Person = {// 封装到单一对象
        walk: function (step) {
            step++;
            return "我已经走了" + step + "步";
        },
        say: function (name) {
            return name;
        }
    };
    console.log(Person.walk(2));// 在函数中执行
    console.log(Person.say('wlc'));
})();

// 外观模式 facade
// 将复杂的实现隐藏，对外只展示简单的调用接口
// 比如JQuery的选择器


// 工厂模式 factory
// 理解，如果单单只是造个小车，那直接定义小车并用来造车即可，但如果要调用多个构造函数来造车不同类型的车，就要工厂来，工厂根据定单中的参数造不同的车
// 造车工厂

//定义小车的构造函数
function Car(option) {
    this.doors = option.doors || 4;
    this.brand = option.brand || '福特';
}
//定义卡车的构造函数
function Truck(option) {
    this.wheels = option.wheels || 4;
    this.brand = option.brand || '东风';
}
//定义工厂
function Factory() {

}
// 默认创建小车
Factory.prototype.type = 'Car';
Factory.prototype.create = function (option) {
    if (option.type === 'Car') {
        this.createBy = Car;
    } else {
        this.createBy = Truck;
    }
    return new this.createBy(option)
};

var factory = new Factory();
var Benz = factory.create({
    type: 'Car',
    doors: 2,
    brand: '奔驰'
});
console.log(Benz);
var Fute = factory.create({
    type: 'Truck',
    wheels: 6,
    brand: '福特'
});
console.log(Fute);


// call apply bind
// 改变函数中的this的指向
// 首先call,apply,bind都是Function中的一个方法，只有函数能够调用
// call和apply都是改变了this后立即执行函数，而bind则是复制函数，并改变this,并返回，且不执行这个新函数
// call apply bind 的第一个参数都是object
function TomFamily() {
}
TomFamily.prototype = {
    father: 'Tom',
    say: function () {
        console.log(this.father);
    }
};
var tomFamily = new TomFamily();
tomFamily.say.apply({father:'Bob'});

var Eat = {
    food: 'apple',
    say: function () {
        console.log(this.food);
    }
};

Eat.say.apply({food:'pear'});

function sayMoney() {
    console.log(this.money);
    console.log(arguments)
}
sayMoney.apply({money:1});
sayMoney.call({money:2});
sayMoney.apply({money:3},[1,2,3]);//第二个参数是一个数组
sayMoney.call({money:4},1,2,3);//可传入多个参数
var newSay = sayMoney.bind({money:5});//他会返回一个绑定了新this的新函数
newSay();

// 如果函数没有bind这个方法，则可以用以下这段代码创建bind这个方法。
if (!function() {}.bind) {
    Function.prototype.bind = function(context) {
        var self = this;
        var args = Array.prototype.slice.call(arguments);

        return function() {
            return self.apply(context, args.slice(1));
        }
    };
}

// mixin 混入模式
// 没有直接通过new来继承，还是通过call来继承了属性，再通过Object来继承了原型

var Man = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = 'man';
};

var SuperMan = function (firstName, lastName, powers) {
    Man.call(this,firstName,lastName);
    this.powers = powers;
};

SuperMan.prototype = Object.create(Man.prototype);
var superMan = new SuperMan('a','b',['c','d']);
console.log(superMan);

// 装饰者模式 decorator
// 装饰者模式和Mixin相类似，Decorator提供了将行为动态添加至系统的现有类的能力，装饰本身对类原有的基本功能来说可能并不是必要的，
// 不然最初的时候就应该合并到父类中。装饰者主要用于修改现有的系统。希望在系统中为对象添加额外功能，而不需要大量修改使用它们的底层代码。

// 最初的类
function MacBook() {
    this.cost = function () {
        return 997;
    };
    this.size = function () {
        return 11.6;
    };
}

// 需要添加的插件,人具有改变最初的类的能力，却无须改动最初的类
function memory(macBook) {
    var cost = macBook.cost();
    mackBook.cost = function () {
        return cost+70;
    }
}

var mackBook = new MacBook();
memory(mackBook);
console.log(mackBook.cost());

