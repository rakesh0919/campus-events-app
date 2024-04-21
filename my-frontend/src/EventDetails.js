import React from 'react';
import { useParams } from 'react-router-dom';
import mockEvents from './mockEvents'; // Assuming the events are stored here
import './EventDetails.css';

function EventDetails() {
  const { id } = useParams();
  const event = mockEvents.find(e => e._id === id);

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <img src={event.image_url} alt={event.title} />
      <p>{event.description}</p>
      <p>Start: {new Date(event.start_date).toLocaleString()}</p>
      <p>End: {new Date(event.end_date).toLocaleString()}</p>
      <p>Location: {event.location}</p>
      <div className="rsvp-container">
        <a href={event.rsvp_link} target="_blank" rel="noopener noreferrer" className="rsvp-button">
        RSVP
        </a>
      </div>
    </div>
  );
}

export default EventDetails;
