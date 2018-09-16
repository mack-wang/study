#### 1.当不同引入的组件同名时
以包名加点区分
<MUI.Button />

#### 2.传统的html元素和组件元素的区分
传统的html元素可以使用本来就有的属性，而组件元素只能使用我们自己定义的元素
因为传统的html元素中的class和for于js冲突
所以在react中如果想使用这两个传统属性，得换成className,htmlFor

#### 3.react组件构建的三种方法
- 1. React.createClass()  
~~~
const Button = React.createClass({
    getDefaultProps(){
        return {
            color: 'blue',
            text: 'confirm'
        };
    },

    render(){
        const {color,text} = this.props;
        return (
            <button className={'btn btn-${color}'}>{text}</button>
        )
    }
})
~~~
这个是最原始，兼容性最高的创建方法
getDefaultProps会返回color,text的值给 this.props
在渲染时，再把this.props的值解构赋值给{color,text}。这样现在才能使用这两个变量
每次使用Button组件时，都会调用该方法生成实例

- 2.ES6 classes 的写法
~~~
import React, { Component } from 'react';

class Button extends Component {
   constructor(props){
        super(props);
   }
   
   static defaultProps = {
        color: 'blue',
        text: 'confirm'
   };
   
   render(){
       const {color,text} = this.props;
        return (
            <button className={'btn btn-${color}'}>{text}</button>
        )
   }
}
~~~
static defaultProps定义默认属性值，contructor初始化构造（如果属性有默认值，则引用默认值，如果属性在组件上定义了，则引用定义的），最后渲染时，也仍然需要把属性解构赋值出来const {color,text} = this.props;这样才能在组件中使用上这些变量
每次使用Button组件时，都会调用该方法生成实例

- 3.无状态函数
~~~
function Button({color='blue',text='confirm'}){
    return (
        <button className={'btn btn-${color}'>{text}</button>
    )
}
~~~
无状态组件只传入props，和context两个参数，不存在state,也就没有生命周期，但仍然还有propTypes和defaultProps静态方法
在合适的情况下，能使用无状态函数就使用无状态函数，因为无论这个组件调用多少次，他始终保持着一个实例。

#### 4.对象赋值的新写法
原先定义一个对象：
~~~
let obj = {
    name1:value1,
    name2:value2,
}
~~~
当然如果name1，name2在obj之前已经是个声明的变量
~~~
let obj = {
    name1:name1,
    name2:name2
}
~~~
在es6中，如果属性名和变量名同名，那么就可以省略
~~~
let obj = {
    name1,//相当于name1 = name1
    name2//相当于name2 = name2
}
~~~

#### 5.子组件的渲染原理
如下的一个组件
~~~
<Father>
    <Child/>
    <Child/>
    <Child/>
</Father>
~~~
在react并不是直接渲染的，而是只渲染Father，然后Father中存在一个重要的内置prop,即children,这个children就挂载着所有的子组件<Child/>,在渲染Fahter时，会调用React.Children.map对子组件进行一一的渲染，相当于
~~~
<Father children=[
    <Child/>
    <Child/>
    <Child/>
    ]>
</Father>
~~~

#### 6.props中可以传递组件作为属性
~~~
function Button({color='blue',childComp='<div>子组件</div>'}){
    return (
        <button className={'btn btn-${color}'>{childComp}</button>
    )
}
~~~

#### 7.state作用域为组件内部，而props则是从父组件向子组件层层传递并作用

#### 8.因为js没有类型检查，所以添加propTypes是作用类型检查，类似于java中的类型检查

#### 9.react的生命周期：挂载、渲染和更新渲染、卸载

#### 10.当shouldComponentUpdate返回false时不更新组件

#### 11.react中事件和html中的事件绑定区别
react中元素事件得用onClick这样的驼峰式写法
html中的元素事件是用onclick全小写的写法

react中支持各种属性值
onClick={this.handleClick}
而html中只支持
onclick="handleClick()";

#### 12.react中的事件是直接绑定在最外层，然后由最外层分配事件给子组件

#### 13.react中绑定事件的三种方法
- 1.自动绑定
~~~
class App extends Component {

    static handleClick(e, arg) {
        console.log(e, arg);
    }

    render() {
        return (
            <div className="App">
                <button onClick={App.handleClick.bind(this, 'text1')}>1</button>
            </div>
        );
    }
}
~~~
- 2.在构造器中绑定
~~~
class App extends Component {
    contructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    static handleClick(e, arg) {
        console.log(e, arg);
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>1</button>
            </div>
        );
    }
}
~~~
- 3.箭头函数(默认绑定当前环境的this)
~~~
class App extends Component {
    handleClick(e, arg)=>{
        console.log(e, arg);
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>1</button>
            </div>
        );
    }
}
~~~

#### 14.使用css modules
- 1.使用
import style from './Button.css';
<button className=${styles.normal}>1</button>
相当于<button class="button--normal-ab234d">1</button>
css modules会自动添加hash,以避免样式重复

- 2.css modules的css文件中写样式，默认是local
.normal{}
等同于
:local(.normal){}
如果想定义全局样式
:global(.btn){}
如果想定义多个全局样式
:global{
    .btn{}
    .btn2{}
}
如果想复用样式,使用composes
.base{}

.normal{
    composes: base;//这样就能插入base的样式
}
.normal{
    composes: $base from './settings.css';//这样就能从别的文件中插入base的样式
}





