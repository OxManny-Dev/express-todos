const {
  getTodos,
  createTodo,
} = require("../../../controllers/todosController");
const router = require('express').Router();

// /api/todos is being prepended to every route declared inside here

// also another separation of concern here
// routes and what happens when that route is hit, is being handled in the same area

router.route('/')
  .get(getTodos)
  .post(createTodo)



// router.get('/:id', getTodoById)
// router.put('/:id', updateTodoById)
// router.delete('/:id', deleteTodoById)

module.exports = router;

// MVC


// Model
// View
// Controller

// Model  === database
// view === our front-end code
// controller = route + route handlers