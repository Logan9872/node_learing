const url = require('url');

var api = 'http://www.logan9872.com?name=elbert&age=24';

// console.log(url.parse(api, true));

var getValue = url.parse(api, true).query;

console.log(getValue)
