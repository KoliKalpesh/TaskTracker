// TaskList.jsx
import React, { useState } from 'react';
import '../components/tasklist.css';

function TaskList({ tasks, deleteTask, editTask }) {
  const [editingTask, setEditingTask] = useState(null);
  const [editedPriority, setEditedPriority] = useState('');
  const [editedStatus, setEditedStatus] = useState('');

  const handleEdit = (taskId, priority, status) => {
    setEditingTask(taskId);
    setEditedPriority(priority);
    setEditedStatus(status);
  };

  const handleSave = (taskId) => {
    if (editedPriority && editedStatus) {
      editTask(taskId, editedPriority, editedStatus);
      setEditingTask(null);
      setEditedPriority('');
      setEditedStatus('');
    }
  };

  const handleReset = () => {
    setEditedPriority('');
    setEditedStatus('');
    setEditingTask(null);
  };

  return (
    <div className='tasklistdiv'>
      <h2>Tasks</h2>
      <ul className="task-list-container"> {/* Apply the specific class for the TaskList component */}
        {tasks.map(task => (
          <li key={task.id} className="task-list-item"> {/* Apply the specific class for each list item */}
            <strong>Title:</strong> {task.title}<br />
            <strong>Description:</strong> {task.description}<br />
            <strong>Assignee:</strong> {task.assignee}<br />
            <strong>Team Name:</strong> {task.teamName}<br />
            <strong>Priority:</strong> {editingTask === task.id ?
              <select className='taskselect' value={editedPriority} onChange={(e) => setEditedPriority(e.target.value)}>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select> :
              task.priority}<br />
            <strong>Status:</strong> {editingTask === task.id ?
              <select className='taskselect' value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Deployed">Deployed</option>
                <option value="Deferred">Deferred</option>
              </select> :
              task.status}<br />
            {editingTask === task.id ? (
              <div className='edit-div-btn'>
                <button className='savebtn' onClick={() => handleSave(task.id)}>Save</button>
                <button className='resetbtn' onClick={handleReset}>Reset</button>
              </div>
            ) : (
              <button className='editbtn' onClick={() => handleEdit(task.id, task.priority, task.status)}>Edit Task</button>
            )}
            <button className='deletebtn' onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
