const url = require('url');
const fs = require('fs');
const path= require('path');
const url = require('url');
// 扩展res
function changeRes(res){
    res.send = (data)=>{
        res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        res.end(data);
    }    
}
// 根据后缀名，获取文件类型
function getFileMime (extname){
    var data = fs.readdirSync('./data/mime.json');//同步方法
    let mimeObj =JSON.parse(data.toString());
    return mimeObj[extname];
}
function initStatic  (req,res,staticPath){
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/'? '/index.html' :pathname;
    let extname = path.extname(pathname);
    //通过fs读取文件
    if(pathname !='/favicon.ico') {
        try{
            let data = fs.readFileSync('./' +staticPath+pathname);
            if(data){
                let mime = getFileMime(extname);
                res.writeHead(200,{'Content-Type':''+mime + ';charset="utf-8"'});
                res.end(data);
            }
        }catch(error){
  
        }
    }
 }
let server = () => {
    let G = {
        _get:{},
        _post:{},
        staticPath:'static',//默认静态web目录
    };
    // let G2 = {};
    // // 把get post 分开
    // G._get={};
    // G._get={};
let app = function (req,res){
    // 扩展res方法
    changeRes(res);
    // 配置静态web服务
    initStatic(req,res,G.staticPath);
    console.log('调用app的方法');
    let pathname = url.parse(req.url).pathname;
    let method = req.method.toLowerCase();
    if(G['_'+method][pathname]){
        if(method =='get'){
            G['_'+method][pathname](req,res);
        }else{
            // 获取post数据，把它绑定到req.body
            let postdata = '';
            req.on('data',(chunk)=>{
                postData += chunk;
            })

        req.on('end',()=>{
            req.body = postData;
            G['_'+method][pathname](req,res);
        })

           
        }
        
    }else{
        res.writeHead(404,{'Content-Type':'text/html;charset="utf-8"'});
        res.end('页面不存在'); 
    }
};
app.get = function(string,cb){
    console.log('get方法');
    G._get[string] = cb;
    // 等价于
    // G['/login'] = function(req,res){
    //     res.end('hello world');
    // }
}
app.post = function(string,cb){
    // console.log('post');
    G._post[string] = cb;
    // 等价于
    // G['/login'] = function(req,res){
    //     res.end('hello world');
    // }
}
//静态web服务目录
    app.static = function(staticPath){
        G.staticPath  = staticPath
    }
return app;
}

// app.post = function(){
//     console.log('post方法')

// }
// // 调用
// app.get('/login',function(req,res){
//     res.end('hello world');
// });
// setTimeout(()=>{
//     app('req','res');
// },1000)
module.exports = server();