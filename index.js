var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

// GET ROOT route
app.get("/", function (req, res) {
  res.json({
    message: "Hello World"
  });
});

// Run Server
app.listen(port, function () {
  console.log(`App is running on port ${port}`);
});