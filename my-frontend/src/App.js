import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import EventsList from './EventsList';
import EventDetails from './EventDetails';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  const [subjectArea, setSubjectArea] = useState('');
  const [clubType, setClubType] = useState('');
  const [freeFood, setFreeFood] = useState(false);
  const location = useLocation(); // Get the current location

  // Determine if the sidebar should be shown (only on the main page)
  const showSidebar = location.pathname === "/";

  return (
    <div className="App">
      <header className="App-header">
        <h1>MyCampus</h1>
      </header>
      <div className="content-area">
        {showSidebar && (
          <Sidebar
            onSubjectChange={setSubjectArea}
            onClubTypeChange={setClubType}
            onFreeFoodChange={setFreeFood}
          />
        )}
        <Routes>
          <Route path="/" element={<EventsList subjectArea={subjectArea} clubType={clubType} freeFood={freeFood} />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
