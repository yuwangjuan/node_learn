const  fs=  require('fs');
var readStream = fs.createReadStream('./data/aaa.jpg');
var writeStream = fs.createWriteStream('./data/bbb.jpg');
readStream.pipe(writeStream);