// TaskForm.jsx
import React, { useState } from 'react';
import moment from 'moment';
import '../components/Taskform.css'
function TaskForm({ addTask }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [teamName, setTeamName] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('P0');

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = moment().format('YYYY-MM-DD');
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      teamName,
      startDate,
      status: 'Pending',
      assignee,
      priority
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setTeamName('');
    setAssignee('');
    setPriority('P0');
    setShowForm(false);
  };

  return (
    <div>
      <div className="top-left-div">
        <label htmlFor="Filter">Filter By</label>
        <select name="" id="">
        <option value="P0">Assignee </option>
        </select>
        <select name="" id="">
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
        </select>
        <input type="date" id="birthday" name="birthday"></input>
        <label htmlFor="">Sort By :</label>
        <select name="" id="">
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
        </select>

      </div>


      <button className='newtaskbtn' onClick={() => setShowForm(true)}>Add New Task</button>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>&times;</span>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-25">
                <label>Title:</label>
                </div>
                <div className="col-75">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                <label>Description:</label>
                </div>
                <div className="col-75">
                <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                <label>Team Name:</label>

                </div>
                <div className="col-75">
                <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />

                </div>
              </div>

              <div className="row">
                <div className="col-25">
                <label>Assignee:</label>

                </div>
                <div className="col-75">
                <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} />

                </div>
              </div>
              <div className="row">
                <div className="col-25">
                <label>Priority:</label>

                </div>
                <div className="col-75">
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>

                </div>
              </div>
              <div className="row">
              <button type="submit">Add Task</button>

              </div>
              
             
              
              
              
              
              
              
              
             
             
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskForm;
