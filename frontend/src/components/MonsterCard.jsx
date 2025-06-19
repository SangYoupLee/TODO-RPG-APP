import React from 'react';
import './MonsterCard.css';

function MonsterCard({ task, onComplete }) {
  return (
    <div className="monster-card">
      <div className="monster-info">
        <h3>👾 {task.title}</h3>
        <p>난이도: {task.difficulty}</p>
        <p>XP: +{task.xp}</p>
      </div>
      <button className="slay-button" onClick={() => onComplete(task.id)}>⚔️ 처치</button>
    </div>
  );
}

export default MonsterCard;
