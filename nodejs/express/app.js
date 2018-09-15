var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/*
*
* 以下为应用级中间件
* */
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// express.static   是 Express 唯一内置的中间件 负责在 Express 应用中提托管静态资源
app.use(express.static(path.join(__dirname, 'public')));

// Use the session middleware
app.use(session({
////这里的name值得是cookie的name，默认cookie的name是：connect.sid
    //name: 'hhw',
    secret: 'keyboard cat',
    cookie: ('name', 'value', { path: '/', httpOnly: true,secure: false, maxAge:  60000 }),
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave: true,
    //强制“未初始化”的会话保存到存储。
    saveUninitialized: true,

}));
// 只需要用express app的use方法将session挂载在‘/’路径即可，这样所有的路由都可以访问到session。
//可以给要挂载的session传递不同的option参数，来控制session的不同特性
app.get('/session', function(req, res, next) {
    var sess = req.session;//用这个属性获取session中保存的数据，而且返回的JSON数据
    if (sess.views) {
        sess.views++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>welcome ' + sess.views + 'times to be here.      ' + 'expires in:' + (sess.cookie.maxAge / 1000) + 's</p>');
        res.end();
    } else {
        sess.views = 1;
        res.end('welcome to the session demo. refresh!')
    }
});


app.use('/', index);

// 挂载至 /users 的中间件，任何指向 /user 的请求都会执行它
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler 错误处理中间件
// 错误处理中间件和其他中间件定义类似，只是要使用 4 个参数，而不是 3 个，其签名如下： (err, req, res, next)。
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/*左边是以前express3默认安装的中间件，右边是express4需要自行引入的中间件模块
express.bodyParser	       body-parser + multer
express.compress	       compression
express.cookieSession	   cookie-session
express.cookieParser	   cookie-parser
express.logger             morgan
express.session	           express-session
express.favicon	           serve-favicon
express.responseTime	   response-time
express.errorHandler	   errorhandler
express.methodOverride	   method-override
express.timeout	           connect-timeout
express.vhost	           vhost
express.csrf	           csurf
express.directory	       serve-index
express.static	           serve-static
*/

// node mysql orm sequelize
