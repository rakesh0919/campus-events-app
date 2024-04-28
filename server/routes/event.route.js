const express = require("express");
const Event = require("../models/event.model.js");
const router = express.Router();
const { getEvents, getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/event.controller.js');

//get all events
router.get('/', getEvents);

//get one event
router.get('/:id', getEvent);

//create an event
router.post('/', createEvent);

//update an event
router.post('/:id', updateEvent);

//delete an event
router.delete('/:id', deleteEvent)



module.exports = router;
