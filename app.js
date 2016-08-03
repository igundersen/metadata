var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var path = require("path");
var app = express();
 
app.get('/', function(req, res) {
  var indexFile = path.join(__dirname + '/index.html');
  res.sendFile(indexFile, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
});


app.post('/upload', upload.single('file'), function (req, res, next) {
  var filesize = req.file.size;
  res.json({
    size: filesize
  });
})
 
app.listen(3000, function() {
  console.log('App listening on port 3000!');
});