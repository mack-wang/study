var express = require('express');
var router = express.Router();
var app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user',{username:'tom6'})
});

/*
*
* 路径匹配
*
* */

// 字符串
router.get('/user', function(req, res) {
    res.render('user',{username:'tom5'})
});

// 字符串模式，同spring security
router.get('/user*1', function(req, res) {
    res.render('user',{username:'tom5'})
});

// 正则模式 包含reg三个字母的路径
router.get(/reg/, function(req, res) {
    res.send('我是包含reg的路由')
});

/*
*
* 路径句柄，可以为同一个路由提供多个回调
*
* */

// 无句柄

router.get('/example/a',function (req, res, next) {
    res.send('无句柄');
});

// 有一个句柄，即有一个回调，即有一个next
router.get('/example/b',function (req, res, next) {
    console.log('这里不处理，交给回调函数来处理');//会在node控制台输出
    next();
},function (req,res) {
    res.send('我是回调函数，我来处理');
});

// 有多个句柄，依次执行，通过next()调用下一个句柄
var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
};
var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
};
var cb2 = function (req, res) {
    res.send('Hello from C!');
};
router.get('/example/c', [cb0, cb1, cb2]);//数组句柄

// 数组和函数句柄同时使用
router.get('/example/d', [cb0, cb1], function (req,res) {
    res.send('我是回调函数2，我来处理');
});

/*
*
*
全部的响应方法
res.download()	提示下载文件。
res.end()	终结响应处理流程。
res.json()	发送一个 JSON 格式的响应。
res.jsonp()	发送一个支持 JSONP 的 JSON 格式的响应。
res.redirect()	重定向请求。
res.render()	渲染视图模板。
res.send()	发送各种类型的响应。
res.sendFile	以八位字节流的形式发送文件。
res.sendStatus()	设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。
*
*
* */


/*
*
* 路由的两种形式
* */

// app.router() 创建路由路径的链式路由句柄,不可用
// app.route('/book')
//     .get(function(req, res) {
//         res.send('Get a random book');
//     })
//     .post(function(req, res) {
//         res.send('Add a book');
//     })
//     .put(function(req, res) {
//         res.send('Update the book');
//     });


/*
*
* 以下为路由级中间件
*
* */
//  express.Router 类创建模块化、可挂载的路由句柄。
// 该路由使用的中间件  // 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// 定义网站主页的路由
router.get('/name', function(req, res) {
    res.send('Birds home page');
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports = router;
