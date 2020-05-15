const fs = require('fs');
var str='';
for(var i=0;i<500;i++){
    str+='我是从法国水水水水计算机技术结束时间，嗖嗖嗖嗖\n';
}
var writeStream = fs.createWriteStream('./data/output.txt');
writeStream.write(str);
writeStream.end();
writeStream.on('finish',()=>{
    console.log('写入完成');
})