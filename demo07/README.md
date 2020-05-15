<!-- function getData(callback){
    setTimeout(function(){
        var name="zhangshan"
        callback(name);
    },1000);
   
}
getData(function(aaa){
    console.log(aaa);
});
var p = new Promise(function(resolve,reject){
    setTimeout(function(){
        var name = "张三";
        resolve(name);
    },1000)
})
p.then(function(data){
    console.log(data);
}) -->
## Promise/async/await
*async 作为一个关键字，放在函数前面，他只有一个作用，**返回一个Promise对象
*Promise 成功会调用resolve，失败会调用reject,执行结**果会在then中
*await 只能放在async函数里面，其实它后面可以放任何表**达式，不过我们更多的是放一个返回promise 对象的表达式，*它等待的是promise 对象的执行完毕，并返回结果