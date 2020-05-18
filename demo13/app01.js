
// 1.安装
const {MongoClient} = require('mongodb');//引入Mongo
//定义数据库连接的地址
const url = 'mongodb://127.0.0.1:27017';
//定义要操作的数据库
const dbName = "itying";
//实例化MongoClient ,传入数据库连接地址
const client = new MongoClient(url,{useUnifiedTopology:true});


// 连接数据库
client.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("数据库连接成功");
    let db = client.db(dbName);
    // 查找数据
    // db.collection("user").find({"age":12}).toArray((err,data)=>{
    //     console.log(data);
    //     //操作数据库完毕以后，一定要关闭数据库连接
    //     client.close();
    // })
    // // 2.增加数据
    // db.collection("user").insertOne({"username":"nodejs操作mongodb","age":13},(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log("增加成功");
    //     console.log(result);
    //     client.close();
    // })

    // db.collection("user").updateOne({"name":"wangmazi"},{$set:{"age":10}},(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log("修改成功");
    //     console.log(data);
    //     client.close();
    // })
    // // 删除数据
    // db.collection("user").deleteOne({"username":"nodejs操作mongodb"},(err)=>{
    //     if(err){
    //                 console.log(err);
    //                 return;
    //             }
    //             console.log("删除一条数据成功");
    //             console.log(data);
    //             client.close();
    // })
    // 删除多条数据
    db.collection("user").deleteMany({"username":"nodejs操作mongodb"},(err)=>{
        if(err){
                    console.log(err);
                    return;
                }
                console.log("删除多条数据成功");
                client.close();
    })
   
})