// 引入模块
const Sequelize = require('sequelize');
// 读取配置
const mysqlConfig = require('./mysql-config');

// 根据配置实例化seq
var seq = new Sequelize(mysqlConfig.dbname, mysqlConfig.uname, mysqlConfig.upwd, {
    host: mysqlConfig.host,
    dialect: mysqlConfig.dialect,
    pool: mysqlConfig.pool,
    port: mysqlConfig.port,
});

module.exports = seq;