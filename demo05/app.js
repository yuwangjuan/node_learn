const fs = require('fs');
// fs.stat
fs.stat('./package.json',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`是文件${data.isFile()}`);
    console.log(`是文件${data.isDirectory()}`);
})
// fs.mkdir
fs.mkdir('./css',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("创建成功");
})
// fs.writeFile
fs.writeFile('index.html','你好，石瑾瑜',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('创建写入文件成功');
})
// fs.appendFile
// fs.appendFile('./css/base.css','body{color:red}',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('appendFile成功');
// })
fs.appendFile('./css/base.css','h2{color:green}\n',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('appendFile成功');
})
//fs.readFile
fs.readFile('index.html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.toString());//把buffer转换成string
})
// fs.readdir
fs.readdir('index.html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})
//fs.rename
// fs.rename('./css/aaa.css','./css/index.css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('重命名成功');
// })
fs.rename('index.css','./css/index.css',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('移动文件成功');
})
// fs.rmdir
// fs.rmdir('./aaa/index.html',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除目录成功');
// })
// fs.unlink
fs.unlink('./aaa/index.html',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除文件成功');
})
fs.rmdir('./aaa',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除目录成功');
})