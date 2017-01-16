var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos: todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //validate id
  if (!ObjectID.isValid(id)) {
    console.log('Id is not valid');
    return res.status(404).send();
  }
  Todo.findById(id).then((todos) => {
    if (!todos) {
      return res.status(404).send();
    }
    res.send(todos.text);
  }).catch((e) => {
    res.status(400).send();
  })
});

app.delete('/todos/:id', (req, res) => {
  // Get the id
  var id = req.params.id;
  // Validate id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Id not found!');
  }
  // Remove todo by id
    // Success
    Todo.findByIdAndRemove(id).then((todo) => {
      if(!todo) {
        return res.status(404).send('Not found!');
      }
      res.send(todo);
    }).catch((e) => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log('Server is running at ' + port);
});

module.exports = {app};
