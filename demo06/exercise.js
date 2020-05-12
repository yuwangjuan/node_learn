// var mkdirp = require('mkdirp');
// mkdirp('./upload',(err)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log('创建成功')
// })

const fs = require('fs');
var path='./wwwroot';
var dirArr=[];
fs.readdir('./wwwroot',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    // 递归
    (function getDir(i){
        if(i==data.length){//执行完成
            console.log(dirArr);
            return;
        }
        fs.stat(path+'/'+data[i],(error,stats)=>{
            if(stats.isDirectory()){
                dirArr.push(data[i]);
            }
            getDir(i+1);
        })
    })(0)
})