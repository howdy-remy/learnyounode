var fs = require('fs'),
		path = require("path");

fs.readdir(process.argv[2], function callback(err, files){
	for (var i = 0; i < files.length; i++) {
		if(path.extname(files[i]) === '.' + process.argv[3]){
			console.log(files[i])
		}
	};
});
