var express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
  

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/static',express.static(__dirname + '/public'));
app.use(express.static('dist'));

app.get('*',(req, res) => {
  res.sendFile(__dirname, 'dist/index.html');
})
var routes = require('./h-api/h-routes/hoteles');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);