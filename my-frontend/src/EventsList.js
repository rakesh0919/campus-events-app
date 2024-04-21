import React from 'react';
import EventCard from './EventCard';
import mockEvents from './mockEvents'; // Adjust path as necessary

function EventsList() {
  return (
    <div>
      {mockEvents.map(event => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
}

export default EventsList;
