const express = require('express');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const ideaRouter = express.Router();
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
} = require('./db');

ideaRouter.param('id', (req, res, next, id) => {
    const ideaId = getFromDatabaseById('ideas', id);
    if (!ideaId) {
        res.status(404).send();
        return;
    }
    req.idea = ideaId;
    next();
});

ideaRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

ideaRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    res.status(201).send(addToDatabase('ideas', req.body));
});

ideaRouter.get('/:id', (req, res, next) => {
    res.send(req.idea);
});

ideaRouter.put('/:id', (req, res, next) => {
    res.send(updateInstanceInDatabase('ideas', req.body));
});

ideaRouter.delete('/:id', (req, res, next) => {
    res.status(204).send(deleteFromDatabasebyId('ideas', req.params.id));
});


module.exports = ideaRouter;