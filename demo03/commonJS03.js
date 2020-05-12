// const http = require('http');
// const tools = require('./module/tools.js');
// console.log(tools);

// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});
//     res.write("<head><meta charset='utf-8'></head>");
//     res.write('你好，nodejs<br/>');
//     var api = tools.formatApi('api/plistd');
//     res.write(api)
//     res.end();
// }).listen(3000);
var request =require('./module/request');
console.log(request.xxxx);