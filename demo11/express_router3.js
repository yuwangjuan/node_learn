const http= require('http');
const app = require('./module/router.js');
const ejs = require('ejs');
// 注册web服务
http.createServer(app).listen(3000);
console.log('Server running at http://127.0.0.1:3000');
app.static('public')//修改默认静态web服务
// 配置路由
app.get('/',function(req,res){
    // res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
    // res.end('首页');
    res.send('首页')
})
app.get('/login',function(req,res){
    // res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
    // res.end('执行登录操作');
    ejs.renderFile('./views/form.ejs',{},(err,data)=>{
        // res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        res.send(data);
    })
})
app.get('/doLogin',function(req,res){
   
    // res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
    res.send(req.body);
})