const router = require('express').Router();
const todoRoutes = require('./todoRoutes');

// /api


// /todos

// We were just forwarded
// from routes/index.js
// and the url that we were forwarded from
//  is "/api"
// we are prepending "/api" to every route declared in here
// prepend /todos to every route declared in todoRoutes
router.use('/todos', todoRoutes);

module.exports = router;