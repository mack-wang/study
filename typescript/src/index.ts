// boolean
let isDone: boolean = false
console.log(isDone)

// number
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
let floatNumber: number = 1.12312
console.log(decLiteral, floatNumber)

// string
let names: string = `Gene`
let age: number = 37
let sentence: string = `Hello, my age is ${ age }`
console.log(names, sentence)

// array
// 普通
let list: number[] = [1, 2, 3]
// 使用泛型
let list2: Array<number> = [1, 2, 3]
console.log(list, list2)

// tuple 元组 （长度和类型确定的数组，但类型可以不一样）
let car: [string, number] = ['benz', 5]
console.log(car)

// enum 枚举
enum Color {Red, Green, Blue}

let c: Color.Red
console.log(c) // undefined

enum Dog {Red = 1, Green, Blue}

let d: Dog.Green
console.log(d) // undefined

let colorName: string = Dog[2];
console.log(colorName);

// any 任意类型
// any 和 object一样，都可以任意赋值，但是赋值后，any可以根据类型，调用相应方法，而object不可以
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(notSure)

// void 没有返回值时
// 可以声明let unusable: void = undefined;或null，但没什么用处
function warnUser(): void {
    console.log("This is my warning message");
}

// never 永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// object
function create(o: object | null): void {
}

create({prop: 0}); // OK
create(null); // OK
//
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// 类型断言 （用尖括号或as）
// 作用，强制把一个不正确的类型当作正确的类型，从而可以忽略类型检查
let someValue: any = 14;
// let strLength: number = (<string>someValue).length; 也行
let strLength: number = (someValue as string).length;
console.log(strLength)


// 变量声明
// 所有变量除了你计划去修改的都应该使用const

// 解构
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [first2] = [1, 2, 3, 4];
console.log(first2); // outputs 1

let obj = {
    name1: "tom",
    age1: 23
}
// let name1 = obj.name1
let {name1, age1} = obj
// let {a, b}: {a: string, b: number} = o; 当从obj中取值时，若想指定类型


// let name1 = obj.name1,并赋值给let name2 = name1
let {name1: name2, age1: age2} = obj
console.log(obj, name1, age1, name2, age2)

// 展开后同名属性会覆盖前者，可用做于options合并
let defaults = {food: "spicy", price: "$$", ambiance: "noisy"};
let search = {food: "rich", ...defaults};
console.log(search)

// 如果在一个对象上展开，要注意，其属性能正常展，但方法会被移除
class Cat {
    p = 12;

    m() {
    }
}

let cat = new Cat();
let cloneCat = {...cat};
console.log(cloneCat.p); // ok
// cloneCat.m(); // error!


/*
*
* 接口
*
* */

// 必有属性
interface LabelledValue {
    label: string;
}

// 可参属性
interface SquareConfig {
    color?: string;
    width?: number;
}

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

function createSquare(config: SquareConfig): SquareConfig {
    console.log(config)
    return config
}

// let mySquare = createSquare({ colour: "red", width: 100 });
// let mySquare2 = createSquare({ colour: "red", width: 100 });
// as 作用，强制把一个不正确的类型当作正确的类型，从而可以忽略类型检查
let mySquare3 = createSquare({colour: "red", width: 100, opacity: 0.5} as SquareConfig);

// 这下面也不会报错，因为编译器不会对squareOptions变量，进行类型检查
let squareOptions = {colour: "red", width: 100};
let mySquare = createSquare(squareOptions);


/*
*
*
* class 类
*
* */


class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        console.log("Hello, " + this.greeting);
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
greeter.greet()


class Animal {
    move(distanceInMeters: number = 0): void {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Pig extends Animal {
    bark(): void {
        console.log('Woof! Woof!');
    }
}

const pig = new Pig();
pig.bark();
pig.move(10);
pig.bark();

// 只有readonly比较特殊，该属性可以在初始化时被赋值，其他时候都不可以赋值
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

// get set方法
// 作用，不用get和set依然可以获取和设置，但设置了，就会在get或set的过程中添加额外的一些处理和判断
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

/*
*
* 函数
*
* */

let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y;
};

console.log(myAdd(1, 2));

let myAdd2 = function (x: number, y: number): number {
    return x + y;
};

// 下面的function会自动 根据上下文推断参数类型
let myAdd3: (baseValue: number, increment: number) => number =
    function (x, y) {
        return x + y;
    };

// 1个或2个参数都是正确的，其他的都是错误的
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

// 可以直接设置默认参数
function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

// 跟go差不多，不过他可以把更多参数都放到一个数组变量中
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

/*
*
* 泛型
*
* */
function identity<T>(arg: T): T {
    return arg;
}

var iden = identity("hello") // 由编译器推断类型
// let output = identity<string>("myString"); // 明确类型
console.log(iden);


/*
* 枚举
* */

enum Responses {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Responses): void {
    // ...
}

respond("Princess Caroline", Responses.Yes)

// 普通枚举
enum Directions {
    Up,
    Down,
    Left,
    Right
}

// 常量枚举，会在编译时被删除，并内联到引用者中
const enum Directions2 {
    Up,
    Down,
    Left,
    Right
}

/*
*
* 类型兼容性
*
* */

//TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性
interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// 下述代码在java中会报错，但是在ts中，因为结构相同，所以可以兼容
p = new Person();


/*
*
* for
*
* */
let pets = ["Cat", "Dog", "Hamster"];
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}







