var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

var todoRoutes = require('./routes/todos');

// GET Root route
app.get("/", function (req, res) {
  res.sendfile("index.html");
});

app.use('/api/todos', todoRoutes);

// Run server
app.listen(port, function () {
  console.log(`App is running on port ${port}`);
});