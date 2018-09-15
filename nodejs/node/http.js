const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req,res) {
    // 处理请求,判断是不是要获取图片
    if('GET' === req.method && '.jpeg' === req.url.substr(-5)){
        // 异步判断请求路径下图片是否存在
        fs.stat(__dirname + req.url, function (err, stat) {
            // 如果出错或者不是图片，则404
            if(err || !stat.isFile()){
                res.writeHead(404);
                res.end('Not Found');
                return;
            }
            // 如果存在，则返回图片
            server(__dirname + req.url, 'application/jpeg');
        });
    }
    // 省略首页和404页

    // 简单封装server函数，接受路径和文件类型，返回文件
    function server (path, type) {
        res.writeHead(200, { 'Content-Type':type});
        // 读取路径下的文件流，通过管道输出到响应
        fs.createReadStream(path).pipe(res);
    }


}).listen(3000);