const http = require('http');
const { request } = require('node:http');

http.createServer((req, res) => {

    console.log(req.url)
})