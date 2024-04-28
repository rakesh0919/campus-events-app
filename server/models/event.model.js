const { time } = require('console');
const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
        name: {
            type: String, 
            required: [true, "Please enter event name"],
        },
        description: {
            type: String, 
            required: false
        },
        date: {
            type: Date,
            required: true
        }, 
        time:{
            type: String, //Store as 'HH:mm' format 
            required: false
        },
        location: { 
            type: String, 
            required: false
        },
        organization_id: {
            type: mongoose.Schema.Types.ObjectId, 
            required: false
        },
        image_url: {
            type: String, 
            required: false
        },
        rsvp_link: {
            type: String, 
            required: false
        }
    }, { timestamps: true});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;