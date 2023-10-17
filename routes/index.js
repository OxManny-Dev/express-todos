const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// we were just forwarded from the pattern of "/" in server.js

// /api/todos

// if the incoming request has "/api" in the url
// forward the request to the routes declared in apiRoutes
router.use('/api', apiRoutes);


module.exports = router;