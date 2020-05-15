let G = {};

let app = function (){
    console.log('调用app的方法');
    if(G['/login']){
        G['/login'](req,res);
    }
};
app.get = function(string,cb){
    console.log('get方法');
    G[string] = cb;
    // 等价于
    // G['/login'] = function(req,res){
    //     res.end('hello world');
    // }
}
app.post = function(){
    console.log('post方法')

}
// 调用
app.get('/login',function(req,res){
    res.end('hello world');
});
setTimeout(()=>{
    app('req','res');
},1000)
