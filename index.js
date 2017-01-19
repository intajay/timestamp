var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:timestamp', function(req, res) {
	var date;

	if (isNaN(req.params.timestamp)) {
		date = new Date(req.params.timestamp);
	} else {
		date = new Date(req.params.timestamp * 1000);
	}

	console.log(date);
	var monthNames = ["January", "February", "March", "April", "May", "June", "July",
	 "August", "September", "October", "November", "December"];

	res.json({
		unix: date.getTime() / 1000,
		natural: monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
	});
});

app.listen(port, function() {
	console.log('Server listening on Port ' + port);
});