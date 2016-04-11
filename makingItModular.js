var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function callback(err, filteredList){
	if (err){
			return callback(err);
	} 

	filteredList.forEach(function(file){
		console.log(file);
	});
	
});