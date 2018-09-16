import react,{findDOMNode,Components,PropTypes} from 'react';

//添加待做事项
export default class AddTodo extends  Components{
    render(){
        return <div>
            <input type="text" ref='input'/>
            {/*添加点击事件*/}
            <button onClick={e => this.handleClick(e)}>
                添加
            </button>
        </div>
    }

    //点击事件要执行的函数
    handleClick(){
        //在虚拟DOM中找到ref='input'的节点，相当于找id='input'的节点$('');
        const node = findDOMNode(this.refs.input);
        //对input的value 进行去除空格
        const text = node.value.trim();
        //添加组件的属性，是一个函数
        this.props.onAddClick(text);
        //重置input
        node.value = '';
    }
}

//AddTodo组件的属性要求：要求有onAddClick
AddTodo.propTypes = {
    onAddClick:propTypes.func.isRequired
};