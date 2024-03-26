// TaskCategories.jsx
import React from 'react';
import './Taskcategories.css'
function TaskCategories({ tasks }) {
  const categories = {
    'Pending': [],
    'In Progress': [],
    'Completed': [],
    'Deployed': [],
    'Deferred': []
  };

  // Categorize tasks by status
  tasks.forEach(task => {
    categories[task.status].push(task);
  });

  return (
    <div className="task-categories">
      {Object.entries(categories).map(([category, tasks]) => (
        <div key={category} className="task-category">
          <h3>{category}</h3>
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id} className="task-item">
                <strong>Title:</strong> {task.title}<br />
                <strong>Assignee:</strong> {task.assignee}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TaskCategories;
