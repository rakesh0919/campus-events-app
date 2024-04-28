const Event = require('../models/event.model.js');

const getEvents = async(req, res) => {
    try{
        const events = await Event.find({});
        res.status(200).json(events);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = { 
    getEvents
}