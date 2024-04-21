import React from 'react';
import { useParams } from 'react-router-dom';
import mockEvents from './mockEvents'; // Import your mock data

function EventDetails() {
  let { id } = useParams();
  const event = mockEvents.find(event => event._id === id); // Find the event by ID

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <img src={event.image_url} alt={event.title} />
      <p>{event.description}</p>
      <p>Start: {event.start_date.toLocaleString()}</p>
      <p>End: {event.end_date.toLocaleString()}</p>
      <p>Location: {event.location}</p>
      {/* Add other details you want to show */}
    </div>
  );
}

export default EventDetails;

