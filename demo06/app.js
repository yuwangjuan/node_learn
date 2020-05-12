// 判断服务器上面有没有upload目录，如果没有创建，如果有，不做操作
// fs.stat   fs.mkdir 
const fs = require('fs');
var path = './upload';

fs.stat('./upload',(err,data)=>{
    if(err){
        //执行创建目录
        mkdir(path);
        return;
    }
    if(data.isDirectory){
        console.log('upload目录存在');
    }else{
        //创建目录
        mkdir(path);
    }
})

function mkdir(dir){
    fs.mkdir(dir,(err)=>{
        if(err){
            console.log(err);
            return;
        }
    })
}

