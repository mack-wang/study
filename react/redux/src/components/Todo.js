import react, {Component, PropTypes} from 'react';

//对每项待做事项进行处理
export default class Todo extends Component{
    render(){
        return <li
            //添加点击事件
            onClick={this.props.onClick}
            //根据completed属性来修改本身的样式
            style={{
                textDecoration:this.props.completed ? 'line-through' : 'none',
                cursor:this.props.completed ? 'default' : 'pointer'
            }}
        >
            {/*从text属性中获取待做事项的具体内容*/}
            {this.props.text}
        </li>;
    }
}

Todo.propTypes = {
    onClick : PropTypes.func.isRequired,//Todo组件一定要有onClick函数属性
    text : PropTypes.string.isRequired,//Todo组件一定要有text文字
    completed : PropTypes.bool.isRequired//Todo组件一定要有是否完成的属性
};