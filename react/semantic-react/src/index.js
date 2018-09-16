import React from 'react';
import {Button,List} from 'semantic-ui-react'//加载semantic的Button组件
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

//只要使用Button标签，就能编译出 <div class="ui button">Click Here</div>
//Button是由semantic已经制作完成了即<div class="ui button">Click Here</div>，现在我们是使用成品组件

let sex = "男";

function changeSex() {
    sex = "女";
    ReactDOM.render(<ButtonExampleButton2/>, document.getElementById('example2'));
}

const ButtonExampleButton = () => (//直接定义一个匿名函数
    <Button color='red' onClick={changeSex}>
        click
    </Button>
);

const ButtonExampleButton2 = () => (//直接定义一个匿名函数
    <Button color='blue'>
        {sex}
    </Button>
);


ReactDOM.render(<ButtonExampleButton/>, document.getElementById('example'));
ReactDOM.render(<ButtonExampleButton2/>, document.getElementById('example2'));

const ListExample = () => (
    <List bulleted>
        <List.Item>Gaining Access</List.Item>
        <List.Item>Inviting Friends</List.Item>
        <List.Item>
            Benefits
            <List.List>
                <List.Item href='#'>Link to somewhere</List.Item>
                <List.Item>Rebates</List.Item>
                <List.Item>Discounts</List.Item>
            </List.List>
        </List.Item>
        <List.Item><ButtonExampleButton2/></List.Item>
    </List>
);
ReactDOM.render(<ListExample/>, document.getElementById('example3'));


class MyButton extends React.Component {//MyButton就是新的组件，Button是组件，MyButton是用组件组成的新组件，还可以不停的嵌套组件下去
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {//当组件完成挂载时执行
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {//当组件卸载时停止执行
        clearInterval(this.timerID);
    }

    tick() {//每次挂载完成会执行此任务，并更新state,并重新渲染vdom
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <Button>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </Button>
        );
    }
}

ReactDOM.render(<MyButton/>, document.getElementById('example3'));




registerServiceWorker();
