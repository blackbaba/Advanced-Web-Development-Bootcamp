var mongoose = require('mongoose');
mongoose.set('debug', true);
var mongoURL = 'mongodb://heroku_3bbsf6r1:eqjgbih3bf4ks21nrh6tfrs2p7@ds159641.mlab.com:59641/heroku_3bbsf6r1'; //'mongodb://localhost/todo-api';
mongoose.connect(mongoURL, function (err, db) {
  console.log(mongoURL);
  if (err) {
    console.log("There has been a database connection error ...");
  } else {
    console.log("Connected to MongoDB successfully ..");
  }
}); //Create a new database if not existing - Running on Port 27017

mongoose.Promise = Promise;
module.exports.Todo = require("./todo");