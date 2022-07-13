const express = require('express');
const minionsRouter = express.Router();
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
} = require('./db');

minionsRouter.param('id', (req, res, next, id) => {
    const minionsById = getFromDatabaseById('minions', id);
    if (!minionsById) {
        res.status(404).send();
        return;
    }
    req.minions = minionsById;
    next();
});

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
    res.status(201).send(addToDatabase('minions', req.body));
});

minionsRouter.get('/:id', (req, res, next) => {
    res.send(req.minions);
});

minionsRouter.put('/:id', (req, res, next) => {
    res.send(updateInstanceInDatabase('minions', req.body));
});

minionsRouter.delete('/:id', (req, res, next) => {
    res.status(204).send(deleteFromDatabasebyId('minions', req.params.id));
});

module.exports = minionsRouter;