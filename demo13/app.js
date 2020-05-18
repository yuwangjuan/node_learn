const http = require("http");
const app = require("./module/router");
const ejs = require('ejs');
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
//定义要操作的数据库
const dbName = "itying";
//实例化MongoClient ,传入数据库连接地址
// const client = new MongoClient(url,{useUnifiedTopology:true});




// 注册web服务
http.createServer(app).listen(3000);
app.get('/',function(req,res){

//     // 连接数据库
// client.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("数据库连接成功");
//     let db = client.db(dbName);
//     db.collection("user").find({}).toArray((err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data);
//         client.close();
//         ejs.renderFile('./views/index.ejs'),{
//             list:result
//         },(err,data)=>{
//             res.send(data);
//         }
//         res.send("首页")
//     })
// })
    
MongoClient.connect(url,(err,client)=>{
        if(err){
        console.log(err);
        return;
    }
    console.log("数据库连接成功");
    let db = client.db(dbName);
    db.collection("user").find({}).toArray((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
        client.close();
        ejs.renderFile('./views/index.ejs'),{
            list:result
        },(err,data)=>{
            res.send(data);
        }
        res.send("首页")
    })
// })
})
})

app.get('/register',function(req,res){
    ejs.renderFile("./views/register.ejs");
    res.send(data);
})