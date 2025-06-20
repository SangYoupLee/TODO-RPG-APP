import React, { useState } from 'react';
import MonsterCard from '../components/MonsterCard';
import './TaskPage.css';

function TaskPage({ tasks, completeTask }) {
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  const filteredTasks = tasks.filter(
    (task) => difficultyFilter === 'All' || task.difficulty === difficultyFilter
  );

  return (
    <div className="page">
      <h2>퀘스트 목록</h2>
      <div className="filter-buttons">
        <button onClick={() => setDifficultyFilter('All')}>All</button>
        <button onClick={() => setDifficultyFilter('Easy')}>Easy</button>
        <button onClick={() => setDifficultyFilter('Hard')}>Hard</button>
      </div>
      {filteredTasks.map((task) => (
        <MonsterCard key={task.id} task={task} onComplete={completeTask} />
      ))}
    </div>
  );
}

export default TaskPage;
