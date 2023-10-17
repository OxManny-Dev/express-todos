// create a simple express server
const express = require('express');
const fs = require('fs');
const routes = require('./routes');
const todos = require('./todos.json');

const app = express();

const PORT = process.env.PORT || 3001;


// these 2 middlewares are meant to used before every single route is declared

// these take the incoming data from the front-end and makes it available in req.body
// normally, we have to do that ourselves, but the syntax is ugly and very confusing to deal with

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//  middlewares are functions that will get called before your route handlers are actually called
const mannyMiddleware = (req, res, next) => {
  console.log('im middlewaring');
  req.manny = 'manny was here';
  next();
}


app.use(mannyMiddleware);



// any request that has "/" in it, forward that request
// to the routes declared in routes/index.js
app.use(routes);



// Separation of concerns




app.get('/api/posts', (req, res) => {
  console.log(req.manny);
  res.json(todos);
});


app.post('/api/posts', (req, res) => {
  const { todo, completed } = req.body;
  if(!todo) {
    return res.status(400).json({ error: "Todo is required" });
  }
  const newTodo = {
    todo,
    completed: completed === "true",
  }
  todos.push(newTodo);
  fs.writeFile('./todos.json', JSON.stringify(todos, null, 2), (err) => {
    if(err) {
      return res.status(500).json({ error: "Something went wrong" });
    }
    res.json(newTodo);
  })
});
//



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));