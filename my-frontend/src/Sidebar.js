import React from 'react';
import './Sidebar.css'; // Ensure you have a CSS file for the sidebar styles

function Sidebar({ onSubjectChange, onClubTypeChange, onFreeFoodChange, onSearch }) {
  return (
    
    <div className="sidebar">

        <div className="filter">
            <label htmlFor="search-field">Search Events</label>
            <input 
                type="text" 
                id="search-field" 
                placeholder="Type to search..."
                onChange={e => onSearch(e.target.value)} // Assuming you handle the search logic in a parent component
            />
      </div>
      <div className="filter">
        <label htmlFor="subject-area">Subject Area</label>
        <select id="subject-area" onChange={e => onSubjectChange(e.target.value)}>
          <option value="">Select a subject</option>
          <option value="Arts">Arts</option>
          <option value="Sciences">Sciences</option>
          <option value="Engineering">Engineering</option>
          <option value="Pre-med">Pre-med</option>
          <option value="Consulting">Consulting</option>
          
        </select>
      </div>

      <div className="filter">
        <label htmlFor="club-type">Club Type</label>
        <select id="club-type" onChange={e => onClubTypeChange(e.target.value)}>
          <option value="">Select a club type</option>
          <option value="Academic">Academic</option>
          <option value="Recreational">Recreational</option>
          <option value="Cultural">Cultural</option>
          <option value="Pre-professional">Pre-professional</option>
          <option value="Greek Life">Greek Life</option>
        </select>
      </div>

      <div className="filter">
        <label htmlFor="branches">Branches</label>
        <select id="branches" onChange={e => onClubTypeChange(e.target.value)}>
          <option value="">Select a branch</option>
          <option value="On-Campus Activities">On-Campus Activities</option>
          <option value="Campus Living and Learnin">Campus Living and Learning</option>
          <option value="Student Activities">Student Activities</option>
        </select>
      </div>

      <div className="filter">
        <label htmlFor="themes">Themes</label>
        <select id="themes" onChange={e => onClubTypeChange(e.target.value)}>
          <option value="">Select a theme</option>
          <option value="Athletic">Athletic</option>
          <option value="Service">Service</option>
          <option value="Fundraising">Fundraising</option>
          <option value="Social">Social</option>
          <option value="Spirituality">Spirituality</option>
        </select>
      </div>

      <div className="filter">
        <label htmlFor="categories">Categories</label>
        <select id="categories" onChange={e => onClubTypeChange(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Film">Film</option>
          <option value="Music">Music</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <div className="filter">
        <label htmlFor="perks">Perks</label>
        <select id="perks" onChange={e => onClubTypeChange(e.target.value)}>
          <option value="">Select a perk</option>
          <option value="Free Food">Free Food</option>
          <option value="Merch">Merch</option>
          <option value="Raffle">Raffle</option>
        </select>
      </div>

      <div className="filter">
        <label htmlFor="online">Online</label>
        <input
          type="checkbox"
          id="online"
          onChange={e => onFreeFoodChange(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default Sidebar;
