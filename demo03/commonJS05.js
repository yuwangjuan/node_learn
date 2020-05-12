var db = require('db');//错误 因为nodejs 默认会找node_modules对应模块里面的index.js.解决办法：在db.js下，打开cmd,npm init --yes,生成package.json
db.add();