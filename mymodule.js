var fs = require('fs'),
		path = require('path');



module.exports = function(dir, ext, callback){

	fs.readdir(dir, function (err, files){
		if (err){
			return callback(err);
		}

		var filteredList = [];

		for (var i = 0; i < files.length; i++) {
			if(path.extname(files[i]) === '.' + ext){
				filteredList.push(files[i]);
			}
		}
		callback(null, filteredList);
	});
};