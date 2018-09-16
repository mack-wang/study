import react, {Component,PropTypes} from 'react';
import Todo from './Todo';
export default class TodoList extends Component{
    render(){
        return (
            <ul>
                {this.props.todos.map((todo,index) =>
                    //...todo，将Todo的属性展开
                    //Todo组件点击后执行添加onClick函数属性，为this.props.onTodoClick(index) key为遍历组件的必要条件
                    <Todo {...todo} onClick={()=>this.props.onTodoClick(index)} key={index}/>
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick:PropTypes.func.isRequired,//要求有onTodoClick属性
    todos: PropTypes.arrayOf(//要求有todos属性，这个属性必须是一个数组，数组中的每个组件都要求要有text,completed属性
        PropTypes.shape({
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        }).isRequired).isRequired
};
