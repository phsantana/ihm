var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');

app.use(cors());
app.use('/assets', express.static('assets'));
app.use('/js', express.static('js'));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  	"Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

app.get('/', (request,response) => response.sendFile(path.join(__dirname + '/index.html')));

app.listen(3000);