import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventsList from './EventsList';
import EventDetails from './EventDetails'; // You need to create this component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Campus Events</h1>
        </header>
        <Routes>
          <Route exact path="/" element={<EventsList />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
