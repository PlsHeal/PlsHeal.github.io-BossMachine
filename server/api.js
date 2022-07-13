const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minionRouter');
const ideaRouter = require('./ideaRouter'); 
const meetingsRouter = require('./meetingsRouter');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideaRouter);
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
