import React from 'react';
import MonsterCard from '../components/MonsterCard';
import './TaskPage.css';

function TaskPage({ tasks, completeTask }) {
  return (
    <div className="page">
      <h2>퀘스트 목록</h2>
      {tasks.map(task => (
        <MonsterCard key={task.id} task={task} onComplete={completeTask} />
      ))}
    </div>
  );
}

export default TaskPage;
