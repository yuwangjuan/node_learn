// DB库
var MongoClient = require('mongodb').MongoClient;
var Config = require('/config.js');
class Db{
    static getInstance(){//单例，多次实例化，实例不共享的问题
        if(!Db.getInstance){
            Db.getInstance = new Db();
        }
        return Db.getInstance;
    }
    constructor(){
        this.dbClient="";//属性，放db对象
        this.connect();
    }
    connect(){//连接数据库
        let _that =this;
        return new Promise((resolve,reject)=>{
            if(!_that.dbClient){
                MongoClient.connect(Config.dbUrl,((err,client)=>{
                    if(err){
                        reject(err);
                    }else{
                        var db= client.db(Config.dbName);
                        _that.dbClient=db;
                        resolve(_that.dbClient);
                    } 
                }))
            }else{
                resolve(_that.dbClient);
            }
        })
    }
    find(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then(()=>{
                var result= db.collection(collectionName).find(json);
                result.toArray(function(err,docs){
                        if(err){
                            reject(err);
                        }
                        resolve(docs);
                })
               })
        })
    }
    update(collectionName,json1,json2){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName,json1,{
                    $set:json2
                },(err,result)=>{
                    if(err){
                        reject(err);
                        return;
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    }
    insert(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).insertOne(json,function(err,result){
                    if(err){
                        reject(err);
                        return;
                    }else{
                        resolve(result);
                    }
                })
            })
        }) 

    }
    remove(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).removeOne(json,function(err,result){
                    if(err){
                        reject(err);
                        return;
                    }else{
                        resolve(result);
                    }
                })
            })
        }) 
    }
}
var myDb = Db.getInstance();

myDb.find('user',{}).then(function(data){
    console.log(data);
})
module.exports = Db.getInstance();