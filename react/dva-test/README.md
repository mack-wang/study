#### 1.创建antd、dva项目
- 1 安装dva
~~~ 
npm install dva-cli -g
~~~

- 2 创建新项目
~~~
dva new 新项目名
~~~

- 3.修改react版本为最新版本
~~~
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
~~~

- 4.安装所有模块
~~~
cnpm install
~~~

- 5.安装antd 和babel转换器
~~~
npm install antd babel-plugin-import --save
~~~

- 6.按需动态加载antd的js和css，
在.roadhogrc中修改，注意开发和生产都要添加这一句
~~~
  "extraBabelPlugins": [
    "transform-runtime",
    ["import", { "libraryName": "antd", "style": "css" }]
  ],
~~~

#### 2.如果出现PropTypes.func不存在的错误  
这是因为react在0.15版本后就开始把PropTypes单独分离了，不在react中引用，如果想使用，可以单独的
~~~
import PropTypes from 'prop-types';
~~~

#### 3.react添加样式，添加css class的方法
http://blog.csdn.net/pcaxb/article/details/53896661







