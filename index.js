var express = require('express'); 
var app = express(); 

// Creates a server which runs on port 3000 and 
// can be accessed through localhost:3000 
app.listen(3000, function() { 
	console.log('server running on port 3000'); 
} ) 

app.get('/name', callName); 

function callName(req, res) { 
	

	var spawn = require("child_process").spawn; 
	

	
	// E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
	// so, first name = Mike and last name = Will 
	var process = spawn('python',["./hello.py", 
							req.query.firstname, 
							req.query.lastname] ); 

	// Takes stdout data from script which executed 
	// with arguments and send this data to res object 
	process.stdout.on('data', function(data) { 
		res.send(data.toString()); 
	} ) 
} 

