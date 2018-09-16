import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <h1>菜鸟教程</h1>
//         <h2>欢迎学习 React</h2>
//         <p data-myattribute="somevalue">这是一个很不错的 JavaScript 库!</p>
//     </div>
//     ,
//     document.getElementById('example')
// );

let i = 1;
//不能使用if else 但能使用 三元运算
ReactDOM.render(
    <div>
        <h1>{1 + 1}</h1>
        <h1>{i === 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('example1')
);

//推荐使用内联样式，并且会自动在需要的地方加上px
// let myStyle = {
//     fontSize: 100,
//     color: '#FF0000'
// };
// ReactDOM.render(
//     <h1 style={myStyle}>菜鸟教程{/*注释...*/}</h1>,//这个注释不会出现在网页上
//     document.getElementById('example2')
// );

//可以插入数组
// let arr = [
//     <h1>菜鸟教程</h1>,
//     <h2>学的不仅是技术，更是梦想！</h2>,
// ];
// ReactDOM.render(
//     <div>{arr}</div>,
//     document.getElementById('example3')
// );


//封装组件
// let HelloMessage = React.createClass({
//     render: function() {
//         return <h1>Hello World！</h1>;
//     }
// });
//
// ReactDOM.render(
//     <HelloMessage />,
//     document.getElementById('example4')
// );

//状态变化
//
/*
React推出后，出于不同的原因先后出现三种定义react组件的方式，殊途同归；具体的三种方式：

函数式定义的无状态组件
es5原生方式React.createClass定义的组件
es6形式的extends React.Component定义的组件 推荐
 */

//无状态封装组件
function Person({firstName, lastName}) {
    return (<span>{lastName}, {firstName}</span>);
}

ReactDOM.render(
    <Person/>,
    document.getElementById('example5')
);

//es5原生方式React.createClass定义的组件
// let HelloMessage = React.createClass({
//     render: function() {
//         return <h1>Hello World！</h1>;
//     }
// });
//
// ReactDOM.render(
//     <HelloMessage />,
//     document.getElementById('example4')
// );

//es6形式的extends React.Component定义的组件 推荐

//
// class Contacts extends React.Component {
//     constructor(props) {
//         super(props);
//     }//
//
//     static handleClick() {
//         console.log("hello"); // null
//     }
//
//     render() {
//         return (
//             <div onClick={Contacts.handleClick}>3435</div>
//         );
//     };
// }

// class LikeButton extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     handleClick(event) {
//     }
//
//     render() {
//         let text = this.liked ? '喜欢' : '不喜欢';
//         return (
//             <p onClick={this.handleClick}>
//                 你<b>{text}</b>我。点我切换状态。
//             </p>
//         );
//     }
// }
//
// ReactDOM.render(
//     <LikeButton />,
//     document.getElementById('example6')
// );

//官方文档案例
//JSX
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('example6')
);

//React.createElement
const element2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

ReactDOM.render(
    element2,
    document.getElementById('example7')
);

//渲染
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('example8')
    );
}

setInterval(tick, 1000);

//定义组件
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element3 = <Welcome name="Sara" />;
ReactDOM.render(
    element3,
    document.getElementById('example9')
);


//如果要渲染数组元素，则要添加key属性，不然console会报错
//key只要是局部唯一就可以，比如索引，id什么的
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);

ReactDOM.render(
    listItems,
    document.getElementById('example10')
);

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm/>,
    document.getElementById('example11')
);

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);//注册两个事件句柄
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {//当select值变化时触发
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {//当表单提交时触发
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {//渲染表单
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

//以后只要<FlavorForm/>，就可以渲染出这个元素
ReactDOM.render(
    <FlavorForm/>,
    document.getElementById('example12')
);

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
ReactDOM.render(
    <Reservation/>,
    document.getElementById('example13')
);


//函数
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />

                <BoilingVerdict //函数动态执行
                    celsius={parseFloat(temperature)} />

            </fieldset>
        );
    }
}
ReactDOM.render(
    <Calculator/>,
    document.getElementById('example14')
);


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator2 extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}
ReactDOM.render(
    <Calculator2/>,
    document.getElementById('example16')
);

registerServiceWorker();



