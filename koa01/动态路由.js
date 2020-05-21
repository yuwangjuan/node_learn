
// 1.安装模块，
// 2.看文档使用

var Koa = require('koa');
var router = require('koa-router')();//引入和实例化,推荐
var app = new Koa();

router.get('/newsContent/:aid',async (ctx)=>{
    ctx.body = "首页";
    console.log(ctx.params)//获取动态路由的传值 //{aid:'123'}获取的是对象，
})

app.use(router.routes())//启动路由
app.use(router.allowedMethods());//可以配置也可以不配置，建议配置
app.listen(3000);