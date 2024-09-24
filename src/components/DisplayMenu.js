import React, { useState } from 'react';
import displayIcon from '../assets/Display.svg';
import '../App.css';

const DisplayMenu = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="display-menu">
      <button onClick={() => setIsOpen(!isOpen)} className="display-button">
        <img src={displayIcon} alt="Display" className="display-icon" />
      </button>
      {isOpen && (
        <div className="menu-dropdown">
          {/* Grouping Dropdown */}
          <div className="menu-item">
            <label>Grouping</label>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          
          {/* Ordering Dropdown */}
          <div className="menu-item">
            <label>Ordering</label>
            <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayMenu;
