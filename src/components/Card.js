import React from 'react';
import noPriority from '../assets/No-priority.svg';
import lowPriority from '../assets/Img - Low Priority.svg';
import mediumPriority from '../assets/Img - Medium Priority.svg';
import highPriority from '../assets/Img - High Priority.svg';
import urgentPriority from '../assets/SVG - Urgent Priority colour.svg';
import warningIcon from '../assets/warning-icon.svg'; 
import profile from '../assets/profile.svg';

const Card = ({ ticket }) => {
  const priorityIcons = {
    'No Priority': noPriority,
    'Low Priority': lowPriority,
    'Medium Priority': mediumPriority,
    'High Priority': highPriority,
    'Urgent Priority': urgentPriority,
    'Profile':profile
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <img src={profile} alt={`${ticket.priority} priority`} className="priority-icon" />
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      {ticket.type === 'Feature Request' && (
        <div className="card-feature-request">
          <img src={warningIcon} alt="Feature Request" className="feature-request-icon" />
          <span>{ticket.type}</span>
        </div>
      )}
      {ticket.tag && (
        <div className="card-footer">
          <span className="tag">{ticket.tag}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
