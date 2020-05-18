 ##cmd输入mongo,连接数据库成功
 ##show dbs 显示所有的数据库
 ##use xxx 创建数据库 eg:use itying 创建一个itying的数据库||使用这个数据库   
 ##db.user.insert({})插入数据
##show collections 查看表里的集合
## db.xxx.drop() 删除集合eg: db.user.drop()删除user集合
##db.dropDatabase()
##查找age=25   db.user.find({"age":25})
##查找age>25   db.user.find({"age":{$gt:25}})
##查找age>=25 db.user.find({"age":{$gte:25}})
##查找age>=25 并且age<=30    db.user.find({"age":{$gte:25,$lte:30}})
##查找name中有zhang的，db.user.find({“name”:/zhang/})
##查找name中以zhang开头的，db.user.find({“name”:/^zhang/})
##查找name中以zhang结尾的，db.user.find({“name”:/zhang$/})

