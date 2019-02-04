var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

var options = {
  inflate: true,
  limit: '100M',
  type: 'application/octet-stream'
};

const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

app.get('/', (req, res) => res.send('Hello World!'))
// POST method route
app.post('/', function (req, res) {
  console.log(req.body.toString())
  res.send('POST request to the homepage')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
