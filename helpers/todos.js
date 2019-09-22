var db = require('../models');

//GET Todos
exports.getTodos = function (req, res) {
  db.Todo.find().then(function (todos) {
    res.json(todos);
  }).catch(function (err) {
    res.send(err);
  });
};

// POST Todo
exports.createTodo = function (req, res) {
  db.Todo.create(req.body)
    .then(function (newTodo) {
      res.status(201).json(newTodo);
    }).catch(function (err) {
      res.send(err);
    });
};

//GET Todo
exports.getTodo = function (req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function (foundTodo) {
      res.json(foundTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

//UPDATE Todo
exports.putTodo = function (req, res) {
  // res.send("UPDATE ROUTE");
  db.Todo.findOneAndUpdate({
      _id: req.params.todoId
    }, req.body, {
      new: true
    })
    .then(function (todo) {
      res.json(todo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

// DELETE Todo
exports.deleteTodo = function (req, res) {
  db.Todo.remove({
      _id: req.params.todoId
    })
    .then(function () {
      res.json({
        message: 'We DELETED it !'
      });
    })
    .catch(function (err) {
      res.send(err);
    });
};

module.exports = exports;