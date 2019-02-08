var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
var fs = require('fs');
const { exec } = require('child_process');

var multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,'./uploads');
    },
    filename: function(req,file,cb){
      cb(null,new Date().toISOString() + file.originalname);
    }
});
var multerupload = multer({ storage: storage })

const routeUploads = "./uploads";

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
  fs.writeFile('myjsonfile.json', '[', function()
  {
    res.send("Done clear");
  })
});

app.post('/save-file',multerupload.single('profiler'), function (req, res ){
  app.use(bodyParser.json());
  var body = req.body;
  var buffer = Buffer.from(body, 'base64');
  const date = new Date().toISOString();
  const fileNameData = date + "profiler.data";
  const fileNameProfiler = date + "profiler.prof";
  const fileProfilerRoute = routeUploads + "/" + fileNameProfiler;
  const fileDataRoute = routeUploads + "/" + fileNameData;
  fs.writeFile(fileDataRoute, buffer, function(err){});

  
  exec('cat ' + fileDataRoute + '| base64 -D >' + fileProfilerRoute);
  exec('rm -rf' + fileDataRoute);
  res.send("Done file upload");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))