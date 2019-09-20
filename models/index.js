var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api'); //Create a new database if not existing - Running on Port 27017

mongoose.Promise = Promise;
module.exports.Todo = require("./todo");