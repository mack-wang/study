/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    ListView,
    TouchableHighlight
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//显示图片组件，使用了Image
class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

//显示问候语
class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

//显示问候语组合
class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
            </View>
        );
    }
}

//文字闪烁
class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
            </View>
        );
    }
}


//样式

const styles2 = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

class LotsOfStyles extends Component {
    render() {
        return (
            <View>
                <Text style={styles2.red}>just red</Text>
                <Text style={styles2.bigblue}>just bigblue</Text>
                <Text style={[styles2.bigblue, styles2.red]}>bigblue, then red</Text>
                <Text style={[styles2.red, styles2.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

//表单输入
class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

//滚动条，立即渲染所有数据，适用小数据
class Scroll extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>If you like</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>Scrolling down</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>What's the best</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>Framework around?</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 80}}>React Native</Text>
            </ScrollView>
        );
    }
}


//滚动窗口，ListView并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。适用大数据
class ListViewBasics extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    render() {
        return (
            <View style={{paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}



//通过fetch、ajax从后台获取数据并展示
//props静态的，设置好后，就按这样显示
//state是动态的，任意时候改变，都会引起重新渲染视图，展示新数据，适用于fetch,ajax
//state一定要采用this.setState({xxx:xxx})才能在this.state初始化后再次进行修改
class RnWidget extends Component {
    constructor(props){
        super(props);
        this.state={
            title : "",
            year : ""
        };
    }

    getMoviesFromApiAsync() {

        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({title : responseJson.movies[0].title
                    ,year : responseJson.movies[0].releaseYear
                });
                console.log(responseJson);

            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="rgb(181, 136, 254)"
                    activeOpacity={0.5}
                    style={{ borderRadius: 8,padding: 8,marginTop:5,backgroundColor:"#0588fe"}}
                    onPress={this.getMoviesFromApiAsync.bind(this)}
                >
                    <Text style={{fontSize:20}}>点击我</Text>
                </TouchableHighlight>
                <Text>title：{this.state.title}</Text>
                <Text>releaseYear：{this.state.year}</Text>

            </View>

        );
    }
}





export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native! mack56
                </Text>
                {/*<Text style={styles.instructions}>*/}
                {/*To get started, edit App.js*/}
                {/*</Text>*/}
                {/*<Text style={styles.instructions}>*/}
                {/*{instructions}*/}
                {/*</Text>*/}
                {/*<Bananas/>*/}
                {/*<LotsOfGreetings/>*/}
                {/*<BlinkApp/>*/}
                {/*<LotsOfStyles/>*/}
                {/*/!*布局*!/*/}
                {/*<View style={{flex: 1, width: 300, height: 100, flexDirection: 'row'}}>*/}
                {/*<View style={{flex: 1, backgroundColor: 'powderblue'}}/>*/}
                {/*<View style={{flex: 2, backgroundColor: 'skyblue'}}/>*/}
                {/*<View style={{flex: 3, backgroundColor: 'steelblue'}}/>*/}
                {/*</View>*/}
                {/*<PizzaTranslator/>*/}
                {/*<Scroll/>*/}
                {/*<View style={{height: 100}}>*/}
                {/*<ListViewBasics/>*/}
                {/*</View>*/}
                <RnWidget/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
