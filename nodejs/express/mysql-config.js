var config = {
    dbname: 'express',
    uname: 'root',
    upwd: 'secret',
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
};

module.exports = config;