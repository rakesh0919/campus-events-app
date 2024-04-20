const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_date: Date,
  end_date: Date,
  location: String,
  category: String,
  organization_id: mongoose.Schema.Types.ObjectId,
  image_url: String,
  rsvp_link: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
