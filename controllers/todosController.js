const fs = require('fs');
const todos = require('../todos.json');

const getTodos = (req, res) => {
  console.log(req.manny);
  res.json(todos);
}


const createTodo = (req, res) => {
  console.log('we out here')
  const {todo, completed} = req.body;
  if (!todo) {
    return res.status(400).json({error: "Todo is required"});
  }
  const newTodo = {
    todo,
    completed: completed === "true",
  }
  todos.push(newTodo);
  fs.writeFile(__dirname + '/../todos.json', JSON.stringify(todos, null, 2), (err) => {
    console.log(err);
    if (err) {
      return res.status(500).json({error: "Something went wrong"});
    }
    res.json(newTodo);
  })
}

module.exports = {
  getTodos,
  createTodo,
}