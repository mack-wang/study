#### 1.通过安装babel转化es6到es5，以便浏览器能运行es6的代码
 npm install --global babel-cli
 npm install --save babel-preset-es2015
 npm install babel-preset-es2015 --save-dev
 cnpm i babel-preset-env --save-dev
 然后新建.babelrc文件
 {
    "presets":['es2015']
 }

 命令：babel-node可以直接运行es6的命令，也可以直接运行es6的js
 babel es6.js -o es5.js 可以将es的文件转换成es5的文件
 babel -d build-dir source-dir 可以整个文件夹转换

 也可以引用balel的js来实时转换es6,略
 node.js脚本中转换es6,略

 #### 2.在webstorm中修改js的版本为es6，并添加file watcher 添加babel
 就可以自动编译es6成为es5


#### 2.let 声明块级作用域变量

#### 3.const 声明块级作用域常量

## 编程规范
#### 4.使用let代替var
#### 5.在全局范围内优先使用常量const，而不是let
#### 6.字符串的表示全部使用单引号，不用双引号
#### 7.能用解构赋值的地方优先使用解构赋值
#### 8.单行对象属性最后不用逗号，多行对象属性最后最好留一个逗号
~~~
const person = {
    name = "tom",
    age = 23,
}
~~~

#### 9.使用拓展运算符...来复制数组，而不要遍历一一复制
#### 10.简单的、单行的、不会复用的函数尽量采用箭头函数，复杂的采用传统的函数写法
#### 11.使用es6 的import 代替 es5的require 