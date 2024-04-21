import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

function EventCard({ event }) {
  return (
    <Link to={`/events/${event._id}`} className="event-card">
      <img src={event.image_url} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Date: {event.start_date.toLocaleDateString()} - {event.end_date.toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      {/* Remove the direct link for RSVP since we're now using the card to navigate */}
    </Link>
  );
}

export default EventCard;
