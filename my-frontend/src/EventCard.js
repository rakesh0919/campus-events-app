import './EventCard.css';

import React from 'react';

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.image_url} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Date: {event.start_date.toLocaleDateString()} - {event.end_date.toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      <a href={event.rsvp_link} target="_blank" rel="noopener noreferrer">RSVP</a>
    </div>
  );
}

export default EventCard;
