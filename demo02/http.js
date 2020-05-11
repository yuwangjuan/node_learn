// node-http-server
// var http = require('http');//引入http模块
// // request 获取url 传过来的信息
// // response:给浏览器响应信息
// http.createServer(function(request,response) {
//     //设置响应头
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     //表示给页面上面输出一句话并且结束响应
//     response.end("Hello World");
// }).listen(8081);//端口
// console.log("Server running at http://127.0.0.1:8081");
//  const  http=require('http');
//  http.createServer((req,res)=>{
//     console.log(req.url); //获取url
//     // 设置响应头
//     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
//     res.write("<head><meta charset='utf-8'></head>")//解决乱码
//     res.write("this is nodejs");
//     if(req.url!='/favicon.ico'){
//         var userinfo = url.parse(req.url,true).query;
//         console.log(`姓名：${userinfo.name}`)
//     }
//     res.end("end");//结束响应
//  }).listen(3000);
//  const url=require('url');
//  var api="http://www.baidu.com?name=zhangshan&age=20";
//  console.log(url.parse(api));
//  var getValue=url.parse(api,true).query;
//  console.log(`姓名：${getValue.name}---年龄：${getValue.age}`)


// request 获取客户端传过来的信息
// response 给浏览器响应信息

const http = require('http');
http.createServer(function(req,res){
    console.log(req.url,'res');
    // console.log(req.url);//获取url;
    res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});//解决乱码
    res.write("<head><meta charset='utf-8'></head>")//解决乱码
    res.write('this is nodejs');
    res.write('<h2>你好 nodeJS</h2>')
    res.end();
}).listen(3000);