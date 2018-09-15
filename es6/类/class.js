//js的类本质是函数，es5中采用函数的写法也能模拟出类的效果，只是es6中对es5的函数的写法进行了包装，从而在函数的基础上实现了类

class Person {
    constructor(name,age){//必须写的构造函数，如果不写，则会自动生成一个空的构造函数
        this.name = name;
        this.age = age;
    }

    toString(){//自定义的方法，不用加function,和在prototype上添加方法的效果相同
        return '('+this.name+','+this.age+')';
    }
}
let person = new Person("tom",24);
console.log(person.toString());

/*
es5函数的写法来实现类
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function(){
    return '('+this.name+','+this.age+')';
}

let person = new Person("tom",24);
console.log(person.toString());

 */

//继承,和java差不多

class ChildPerson extends Person{
    constructor(name,age,sex,height){
        super(name,age);//调用父类的constructor(name,age);
        this.sex = sex;//实现自己的属性 注意，只有调用了super之后，才能用this这个关键字
        this.height = height;
    }

    toString(){
        return this.sex + ' ' + super.toString();
    }　

    get getHeight(){//同java
        return this.height;
    }

    set setHeight(height){
        this.height = height;
    }

    static sayName(){//添加了static的方法，不会被实例继承，而是通过类直接调用！
        console.log(1+1);
    }
}

let child  = new ChildPerson("cindy",25,"girl",174);
console.log(child.toString());
child.height = 175;
console.log(child.height);

ChildPerson.sayName();
