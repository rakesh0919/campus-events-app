import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EventsList from './EventsList';
import mockEvents from './mockEvents'; // Import your events data

function MainComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState(mockEvents); // Load your mock events here

  // Filter events based on search query
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Sidebar 
        onSearch={setSearchQuery} 
        onSubjectChange={(value) => console.log('Subject Changed:', value)}
        onClubTypeChange={(value) => console.log('Club Type Changed:', value)}
        onFreeFoodChange={(checked) => console.log('Free Food Filter:', checked)}
      />
      <EventsList events={filteredEvents} />
    </div>
  );
}

export default MainComponent;
