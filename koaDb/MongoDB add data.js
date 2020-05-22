var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var dbName = 'koa';//数据库名称
// 链接数据库
MongoClient.connect(url,(err,client)=>{
    if(err){
        console.log(err);
        return;
    }
    var db = client.db(dbName);
    // 增加数据
    // db.collection('user').insertOne({'username':"张山",'age':23,'sex':'男','status':1},(err,result)=>{
    //     if(!err){
    //         console.log('增加成功');
    //         client.close();
    //     }
    // }
    // 查询数据
    var result = db.collection('user').find({});
    result.toArray((err,docs)=>{
        console.log(docs);
    })
})
