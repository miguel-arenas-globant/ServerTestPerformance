var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

const lodash = require('lodash');
const {mongoose} = require('./mongoose')
const {Profiler} = require('./profiler')

var options = {
  inflate: true,
  limit: '100M',
  type: 'application/octet-stream'
};

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get('/', function (req, res){
  /*Profiler.find().then((profilers) => {
    console.log(profilers);
  },(e) => {
    
  })*/
  console.log("Hello World");
});

// POST method route
app.post('/', function (req, res) {
  console.log(req.body.toString());
  let body = lodash.pick(req.body, ['name', 'cat', 'ph', 'pid', 'tid', 'ts']);
  let profiler = new Profiler(body);
  profiler.save().then(() => {
    res.send('POST request to the homepage')
  }).catch((e) => {
  })
  
})

