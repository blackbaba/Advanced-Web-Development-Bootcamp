var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api'); //Running on Port 27017

mongoose.Promise = Promise;