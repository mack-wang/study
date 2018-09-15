var user = require('./model/user');


user
    // 添加用户
    .addUser('jack', 'jack@163.com')
    // 查询新添加的用户
    .then(function () {
        return user.findByName('jack');
    })
    // 输出查询到的用户
    .then(function (user) {
        console.log('****************************');
        console.log('user name: ', user.user_name);
        console.log('user email: ', user.email);
    });