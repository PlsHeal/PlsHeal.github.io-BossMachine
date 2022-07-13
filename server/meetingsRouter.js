const express = require('express');
const meetingsRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase,
} = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
    const addMeeting = addToDatabase('meetings', createMeeting());
    if (addMeeting) {
        res.status(201).send(addMeeting);
    }
    else {
        res.status(404).send();
    }
});

meetingsRouter.delete('/', (req, res, next) => {
    const deleteAll = deleteAllFromDatabase('meetings');
    if (deleteAll) {
        res.status(204).send(deleteAll);
    }
    else {
        res.status(500).send();
    }
});

module.exports = meetingsRouter;