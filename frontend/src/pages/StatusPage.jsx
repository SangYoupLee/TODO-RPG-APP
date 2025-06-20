import React from 'react';
import './StatusPage.css';

function StatusPage({ xp, level }) {
  return (
    <div className="page status-page">
      <h2 className="shadow-xl">Status</h2>
      <div className="status-card">
        <img src="https://i.imgur.com/dtE9A7r.png" alt="avatar" className="avatar" />
        <h3>Sir Tasks-a-lot</h3>
        <p>Level {level}</p>
        <div className="xp-bar">
          <div className="progress" style={{ width: `${xp}%` }}></div>
        </div>
        <p>{xp}/100 XP</p>
        <h4>Equipped Items</h4>
        <div className="items">
          <span>🔪</span>
          <span>🎭</span>
          <span>🐉</span>
        </div>
      </div>
    </div>
  );
}

export default StatusPage;