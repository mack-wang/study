
//相当于java中的声明@
//要安装babel的插件，才能正常转成es5,并且webstorm的无法转decorator
//修饰器只能用于类和类的方法，不能用于函数
function test(target){
    target.isTest = true;
}

//修饰器的本质是在编译时执行的函数
@test
class MyClass{}//相当于在MyClass中插入了this.isTest = true;

console.log(MyClass.isTest);

//可以添加core-decorators.js拓展，这样就可以使用java上的一些常用声明 @autobind,@readonly,@override,@deprecate,@suppressWarnings