import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTaskPage.css';

function CreateTaskPage({ addTask }) {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [type, setType] = useState('daily');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, difficulty, type });
    navigate('/');
  };

  return (
    <div className="page">
      <h2>Create a New Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <label>Task Name</label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />

        <label>Difficulty</label>
        <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <label>Type</label>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="one-time">One-Time</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default CreateTaskPage;
