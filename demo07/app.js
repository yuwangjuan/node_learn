async function test(){//Promise{'你好，nodejs'}
    // return "nodejs";
    return new Promise((resolve,reject)=>{
         
    })
}
test();
await test()//await必须用在异步async方法里，这样写是错误的
async  function main(){
    var data=await test();//获取异步方法里面的数据

}
//定义一个isDir的方法，判断一个资源到底是目录还是文件
//获取wwwroot里面的所有资源，循环遍历



async function isDir(path){
   return new Promise((resolve,reject)=>{
    fs.stat(path,(err,stats)=>{
        if(error){
            return;
        }
        if(stats.isDirectory()){
            resolve(true);
        }else{
            resolve(false);
        }
    })
   })
}
 function main (){
    var path="./wwwroot"
    var dirArr = [];
    fs.readdir(path,async (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        for(var i=0;i<data.length;i++){
            if(await isDir(path+'/'+data[i])){
                idrArr.push(data[i]);
            }
        }
        console.log(dirArr);
    })
}
main();

