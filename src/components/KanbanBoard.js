import React, { useMemo } from "react";
import Column from "./Column";
import backlogIcon from "../assets/Backlog.svg";
import todoIcon from "../assets/To-do.svg";
import inProgressIcon from "../assets/in-progress.svg";
import doneIcon from "../assets/Done.svg";
import noPriorityIcon from "../assets/No-priority.svg";
import lowPriorityIcon from "../assets/Img - Low Priority.svg";
import mediumPriorityIcon from "../assets/Img - Medium Priority.svg";
import highPriorityIcon from "../assets/Img - High Priority.svg";
import urgentPriorityIcon from "../assets/SVG - Urgent Priority colour.svg"; 
import cancelledIcon from "../assets/Cancelled.svg";



const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const statusIcons = {
    Backlog: backlogIcon,
    Todo: todoIcon,
    "In progress": inProgressIcon,
    Done: doneIcon,
    Cancelled: cancelledIcon,
  };

  const priorityIcons = {
    "No priority": noPriorityIcon,
    Urgent: urgentPriorityIcon,
    High: highPriorityIcon,
    Medium: mediumPriorityIcon,
    Low: lowPriorityIcon,
  };

  const priorityOrder = ["No priority", "Urgent", "High", "Medium", "Low"]; 

  const groupedAndSortedTickets = useMemo(() => {
    let grouped = {};

    if (grouping === "status") {
      grouped = tickets.reduce((acc, ticket) => {
        (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === "user") {
      grouped = tickets.reduce((acc, ticket) => {
        const user = users.find((u) => u.id === ticket.userId);
        (acc[user.name] = acc[user.name] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === "priority") {
      grouped = tickets.reduce((acc, ticket) => {
        const priorityName = priorityOrder[ticket.priority]; 
        (acc[priorityName] = acc[priorityName] || []).push(ticket);
        return acc;
      }, {});
    }

    Object.keys(grouped).forEach((key) => {
      grouped[key].sort((a, b) => {
        if (sorting === "priority") {
          return b.priority - a.priority;
        } else if (sorting === "title") {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return grouped;
  }, [tickets, users, grouping, sorting]);

  const orderedGroups = grouping === "priority" 
    ? priorityOrder.filter(key => groupedAndSortedTickets[key]) 
    : Object.keys(groupedAndSortedTickets); 

  return (
    <div className="kanban-board">
      {orderedGroups.map((key) => (
        <Column
          key={key}
          title={key}
          tickets={groupedAndSortedTickets[key]}
          icon={
            grouping === "status"
              ? statusIcons[key]
              : grouping === "priority"
              ? priorityIcons[key]
              : null 
          }
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
