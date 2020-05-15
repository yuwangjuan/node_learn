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