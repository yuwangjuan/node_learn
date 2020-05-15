const ejs = require('ejs');
let msg = '我是石鲸鱼'
ejs.renderFile('./views/login.ejs',{msg:msg},(err,data)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
    res.end(data);
})