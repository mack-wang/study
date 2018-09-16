import React, {Component} from 'react';
import './App.css';

class App extends Component {

    static handleClick(e, arg) {
        console.log(e, arg);
    }

    render() {
        return (
            <div className="App">
                <button onClick={App.handleClick.bind(this, 'text1')}>1</button>
                <button onClick={App.handleClick.bind(this, 'text2')}>2</button>
                <button onClick={App.handleClick.bind(this, 'text3')}>3</button>
                <button onClick={App.handleClick.bind(this)}>4</button>
                <button onClick={App.handleClick.bind(this)}>4</button>
            </div>
        );
    }
}

export default App;
