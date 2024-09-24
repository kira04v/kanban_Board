
import React from 'react';
import Card from './Card';
import profile from '../assets/profile.svg'; 
import addIcon from '../assets/add.svg';
import menuIcon from '../assets/3 dot menu.svg';

const Column = ({ title, tickets, icon }) => {
  return (
    <div className="column">
      <div className="column-header">
        {/* Dynamic Icon, Title, and Ticket Count */}
        <div className="header-left">
          {/* Use the icon passed via props, fallback to the profile icon if none is provided */}
          <img src={icon || profile} alt="Icon" className="header-icon" />
          <h2>{title} ({tickets.length})</h2>
        </div>
        
        {/* Add and 3 Dots Icons */}
        <div className="header-right">
          <img src={addIcon} alt="Add" className="header-action-icon" />
          <img src={menuIcon} alt="Options" className="header-action-icon" />
        </div>
      </div>

      {/* Cards */}
      {tickets.map(ticket => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;

