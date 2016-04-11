var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var strArr = contents.toString().split('\n');
var count = strArr.length - 1
console.log(count);