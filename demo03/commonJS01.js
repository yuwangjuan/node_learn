const http = require('http');

function formatApi(api){
    return "http://www/itying.com/"+api;
}

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html;charset='utf-8'"});
    res.write("<head><meta charset='utf-8'></head>");
    res.write('你好，nodejs<br/>');
    var api = formatApi('api/plist');
    res.write(api)
    res.end();
}).listen(3000);