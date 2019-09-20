var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

var todoRoutes = require('./routes/todos');
// GET Root route
app.get("/", function (req, res) {
  res.send("Hi from Root Route");
});

app.use('/api/todos', todoRoutes);

app.get("/", function (req, res) {});
app.get("/", function (req, res) {});
app.get("/", function (req, res) {});
app.get("/", function (req, res) {});
app.get("/", function (req, res) {});

// Run server
app.listen(port, function () {
  console.log(`App is running on port ${port}`);
});