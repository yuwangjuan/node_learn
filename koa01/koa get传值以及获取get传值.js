// var Koa = require("koa");
// var Router = require('koa-router');
//
// 实例化
// var app = new Koa();
// var router = new Router();
// // 配置路由
// // 中间件
// // app.use(async (ctx)=>{
// //     ctx.body="hello koa2.x";
// // })
// // ctx上下文content,包含了request，response等信息
// router.get('/',async (ctx)=>{
//     ctx.body = "首页";//返回数据，原生数据的 res.writeHead() res.send()
// }).get('/news',async(ctx)=>{
//     ctx.body = "这是一个新闻界面";
// })
// // 启动路由
// app
//     .use(router.routes())//启动路由
//     .use(router.allowedMethods());//可以配置也可以不配置，建议配置
// app.listen(3000)

// 1.安装模块，
// 2.看文档使用

var Koa = require('koa');
var router = require('koa-router')();//引入和实例化,推荐
var app = new Koa();

router.get('/',async (ctx)=>{
    ctx.body = "首页";
})
router.get('/newsContent',async (ctx)=>{
    // 从ctx中读取get值
    console.log(ctx.query)//{aid:'123'}获取的是对象，用的最多的方式
    console.log(ctx.querystring)//aid=123&name=zhangsan   获取的是一个字符串
    // ctx里面的request里面获取get传值
    console.log(ctx.request.url)
    console.log(ctx.request.query)
    ctx.body = "newsContent";
})
app.use(router.routes())//启动路由
app.use(router.allowedMethods());//可以配置也可以不配置，建议配置
app.listen(3000);