var Koa = require('koa'),
    router = require('koa-router')(),//引入和实例化,推荐
    views = require('koa-views'),
    render = require('koa-art-template'),
    path = require('path'),
    session = require('koa-session');
var app = new Koa();


router.get('/',async (ctx)=>{
    // 获取session
    console.log(ctx.session.userinfo);
    await ctx.render('index');
    // ctx.body = "首页";
})
router.get('/login',async (ctx)=>{
   ctx.session.userinfo="zhangshan"
    // ctx.body = "首页";
})
// 配置session 中间件
const CONFIG = {
    key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
    maxAge: 86400000,//cookie的过期时间//【需要修改】
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) *///没有效果，默认
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    secure: true, /** (boolean) secure cookie*///【需要修改】
    sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
  };
   
  app.use(session(CONFIG, app));

app.use(router.routes())//启动路由
app.use(router.allowedMethods());//可以配置也可以不配置，建议配置
app.listen(3000);