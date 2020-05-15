const fs = require('fs');
const path= require('path');
const url = require('url');
 exports.getFileMime = function(extname){
     var data = fs.readdirSync('./data/mime.json');//同步方法
     let mimeObj =JSON.parse(data.toString());
     return mimeObj[extname];
 }

 exports.static = function (req,res,staticPath){
     var data = fs.readFileSync('./data/mime.json');
     let mimeObj =JSON.parse(data.toString());
     return mimeObj[extname];
 }

 var app = {
     static:(req,res,staticPath)=>{
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
     },
     login:(req,res)=>{
        //  处理登录的业务逻辑

     },
     new:(req,res)=>{},
     doLogin:(req,res)=>{

     },error:(req,res)=>{
         res.end('error');
     }
 }
//  app.login('req','res');

// app['login']('req','res');

module.exports = app;