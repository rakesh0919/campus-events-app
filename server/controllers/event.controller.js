const Event = require('../models/event.model.js');


//Get All Events
const getEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Get Single Event 
const getEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Add Events
const createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Update an Event
const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const event = await Event.findByIdAndUpdate(id, req.body);

        if (!event) {
            return res.status(404).json({ message: "Event not Found" });
        }

        const updatedEvent = await Event.findById(id);
        res.status(200).json(updatedEvent);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Delete an Event
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByIdAndDelete(id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json({ message: "Event taken down successfully!" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}