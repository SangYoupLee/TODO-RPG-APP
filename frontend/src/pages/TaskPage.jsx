import React, { useState } from 'react';
import MonsterCard from '../components/MonsterCard';
import './TaskPage.css';

function TaskPage({ tasks, completeTask }) {
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredTasks = tasks.filter(
    (task) =>
      (difficultyFilter === 'All' || task.difficulty === difficultyFilter) &&
      (typeFilter === 'All' || task.type === typeFilter.toLowerCase())
  );

  return (
    <div className="page">
      <h2 className="shadow-xl">퀘스트 목록</h2>
      <div className="filter-buttons">
        <button className="hover:scale-105" onClick={() => setDifficultyFilter('All')}>All</button>
        <button className="hover:scale-105" onClick={() => setDifficultyFilter('Easy')}>Easy</button>
        <button className="hover:scale-105" onClick={() => setDifficultyFilter('Hard')}>Hard</button>
      </div>
      <div className="filter-buttons">
        <button className="hover:scale-105" onClick={() => setTypeFilter('All')}>All</button>
        <button className="hover:scale-105" onClick={() => setTypeFilter('Daily')}>Daily</button>
        <button className="hover:scale-105" onClick={() => setTypeFilter('Weekly')}>Weekly</button>
      </div>
      {filteredTasks.map((task) => (
        <MonsterCard key={task.id} task={task} onComplete={completeTask} />
      ))}
    </div>
  );
}

export default TaskPage;
