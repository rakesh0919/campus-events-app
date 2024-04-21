import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

function EventCard({ event }) {
  return (
    <Link to={`/events/${event._id}`} className="event-card">
      <img src={event.image_url} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Date: </strong>{event.start_date.toLocaleDateString()} - {event.end_date.toLocaleDateString()}</p>
      <p><strong>Location: </strong>{event.location}</p>
    </Link>
  );
}

export default EventCard;
