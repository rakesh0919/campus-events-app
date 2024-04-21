import React from 'react';
import EventCard from './EventCard';
import mockEvents from './mockEvents'; // Adjust path as necessary
import './EventsList.css'; // Make sure this path is correct


function EventsList() {
  return (
    <div className="events-list">
      {mockEvents.map(event => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
}

export default EventsList;
