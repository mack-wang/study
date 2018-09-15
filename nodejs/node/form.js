const qs = require('querystring');
require('http').createServer(function (req, res) {
    // 整个http网站就是一个req,请求，res，响应
    // req中包含请求各种参数，比如url,query,method等
    // res中包含各种响应
    if ('/' === req.url) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <form method="POST" action="/url">
                <input type="text" name="name">
                <input type="submit" placeholder="提交">
            </form>
        `)
    } else if ('/url' === req.url && 'POST' === req.method) {
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`
           <p> ${qs.parse(body).name} </p>
        `)
        })
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
}).listen(3000);