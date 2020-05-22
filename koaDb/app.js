var Koa = require('koa'),
    router = require('koa-router')(),//引入和实例化,推荐
    views = require('koa-views'),
    DB = require('./module/db.js');
var app = new Koa();

app.use(views('views',{
    extension:'ejs',//应用ejs模板引擎,模板的后缀名是ejs
}));

// 写一个中间件配置公共信息
app.use(async (ctx,next)=>{
    ctx.state.userinfo='zhangshan';
   await  next();//继续向下匹配路由
})

router.get('/',async (ctx)=>{

    var result=DB.find('user',{});

    await ctx.render('index',{
        list:result
    });
    // ctx.body = "首页";
})

app.use(router.routes())//启动路由
app.use(router.allowedMethods());//可以配置也可以不配置，建议配置
app.listen(3000);