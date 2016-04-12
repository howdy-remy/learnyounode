var mymodule = require('./mymodule');
// the main idea is to use a module, which is demonstrated in your solution.  The tests specs are very vague for this problem
// excellent job coming up with this solution!
mymodule(process.argv[2], process.argv[3], function callback(err, filteredList){
	if (err){
			return callback(err);
	} 

	filteredList.forEach(function(file){
		console.log(file);
	});
	
});
