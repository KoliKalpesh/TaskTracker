// App.jsx
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskCategories from './TaskCategories';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId, editedPriority, editedStatus) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, priority: editedPriority, status: editedStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='main-div'>
      <h1>Task Tracker</h1>
      <div className="main-div2">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      <TaskCategories tasks={tasks} />

      </div>
    
    </div>
  );
}

export default App;
