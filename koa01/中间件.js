
// 1.安装模块，
// 2.看文档使用
// 中间件：匹配路由之前或匹配路由完成做的一系列的操作
var Koa = require('koa');
var router = require('koa-router')();//引入和实例化,推荐
var app = new Koa();
//应用级中间件
app.use(async (ctx,next)=>{
    console.log(new Date());
    await next();
})
// 路由级中间件
//匹配到路由，继续向下匹配
router.get('/', async (ctx,next)=>{
    await next();
})

app.use( async (ctx,next)=>{
    next();
    if(ctx.stutus==404){
        ctx.status = 404;
    }
})
app.use(router.routes())//启动路由
app.use(router.allowedMethods());//可以配置也可以不配置，建议配置
app.listen(3000);