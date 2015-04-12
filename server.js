var app = require('./app');
var server = app.listen(3000, function () {

	//report status http server
 	var host = server.address().address
  	var port = server.address().port
  	console.log('Server app listening at http://%s:%s', host, port)
})