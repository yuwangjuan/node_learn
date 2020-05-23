## node学习  
*1.安装node-Snippets，会有node语法提示

*node-http-server  
*url url.parse()  
*supervisor   
*1.我们可以把公共的功能抽离成为一个单独的js,作为一个模块，    
让外部文件访问模块里面的方法或属性，必须在模块里面通过exports 或module.exports暴露属性或方法     

*在需要使用这些模块的文件中，通过require的方式引入这个模块，    
这个时候就可以使用模块里面暴露的属性和方法   

*md5对字符串进行加密：npm install md5; require引入  
*卸载模块：npm uninstall 模块名   
*查看依赖包：npm list  
*指定版本安装：npm install node-media-server@2.1.0  --save  
*package.json 生成命令： npm init --yes   
    *文件中的dependencies放工具包   
    * ^表示第一位版本号不变，后面两位取最新的 ^2.1.1  
    * ~表示前两位不变，最后一个取最新 ~2.1.1  
    * *表示全部取最新 *2.1.1   
     指定版本，不加任何符号2.1.1   

##fs
*fs.stat            检测是文件还是目录   
*fs.mkdir           创建目录    
*fs.writeFile       创建写入文件  
*fs.appendFile      追加文件(如果文件不存在，会创建)  
*fs.readdir         读取目录  
*fs.readFile        读取文件
*fs.rename          重命名;移动文件
*fs.rmdir           删除目录  
*fs.unlink          删除文件

## Promise/async/await
*async 作为一个关键字，放在函数前面，他只有一个作用，**返回一个Promise对象   
*Promise 成功会调用resolve，失败会调用reject,执行结**果会在then中   
*await 只能放在async函数里面，其实它后面可以放任何表**达式，不过我们更多的是放一个返回promise 对象的表达式，*它等待的是promise 对象的执行完毕，并返回结果   
##createReadStream读取流 /createWriteStream写入流    
#node 都在npmjs.com 中找          




