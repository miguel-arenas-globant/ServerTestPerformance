var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
var fs = require('fs');

var options = {
  inflate: true,
  limit: '100M',
  type: 'application/octet-stream'
};

const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

app.get('/', function(req, res){
	fs.readFile('myjsonfile.json', 'utf8', function (err, data) {
  	if (err) throw err;
	console.log(data);
	res.send(data);
	});
  })
  
// POST method route
app.post('/', function (req, res) {
  console.log(req.body.toString())
  fs.appendFile('myjsonfile.json', req.body.toString() + ",\n\r", 'utf8',(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
  res.send('POST request to the homepage')
})

app.get('/clear', function(req, res){
  fs.writeFile('myjsonfile.json', '', function(){console.log('done clear')})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))