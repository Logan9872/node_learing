const http = require('http');

http.createServer((req, res) => {

    console.log(req.url);
    // 设置响应头
    // 设置 http响应头，状态为200，文件类型为html，字符集为UTF-8
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8 demo2" });

    res.write('Today is a good day,good day');

    res.end('bye11111');

}).listen(3000);