const http = require('http');
const url =require('url');
http.createServer(function(req,res){
    console.log(req.url,'res');
    // console.log(req.url);//获取url;
    res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});//解决乱码
    res.write("<head><meta charset='utf-8'></head>")//解决乱码
    // res.write('this is nodejs');
    // res.write('<h2>你好 nodeJS</h2>')
    if(req.url !='/favicon.ico'){
        var userInfo = url.parse(req.url,true).query;
        console.log(`姓名：${userInfo.name}---年龄${userInfo.age}`);
    }
    res.end();
}).listen(3000);