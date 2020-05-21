var Koa = require('koa'),
    path = require('path'),
    router = require('koa-router')(),//引入和实例化,推荐
    views = require('koa-views'),
    common = require('module/common.js'),
    bodyParser = require('koa-bodyparser'),
    static = require('koa-static'),
    render = require('koa-art-template');//模板引擎
var app = new Koa();

app.use(views('views',{
    extension:'ejs',//应用ejs模板引擎,模板的后缀名是ejs
}));
app.use(static('./static'))
// 配置koa-art-template模板引擎
render(app,{
    root:path.join(__dirname,'view'),//试图的位置
    extname:'.art',//后缀名
    debug:process.env.NODE_ENV !=='production'//是否开启调试模式
})

router.get('/',async (ctx)=>{
    await ctx.render('post')
})
// 接受post提交的数据
router.post('/doAdd', async (ctx)=>{
    // 原生js,在koa中获取表单数据
    // var data= await common.getPostData(ctx);
    ctx.body=ctx.request.body;//获取表单提交的数据
    req.on('data',function(data){})
})

app.use(router.routes())//启动路由
app.use(router.allowedMethods());//可以配置也可以不配置，建议配置
app.listen(3000);