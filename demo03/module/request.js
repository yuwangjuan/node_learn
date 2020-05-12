// 第一种
// var obj={
//     get:function(){
//         console.log('从服务器获取数据');
//     },
//     post:function(){
//         consoel.log('提交数据')
//     }
// }
// // exports.xxxx=obj;
// module.exports = obj;

// 第二种
exports.get = function(){
    console.log('从服务器获取数据');
}
exports.get = function(){
    console.log('提交数据');
}