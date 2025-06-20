import React from 'react';
import './MyPage.css';

function MyPage({ xp, level }) {
  return (
    <div className="page my-page">
      <h2>My Page</h2>
      <div className="status-card">
        <h3>Warrior John</h3>
        <p>Level {level}</p>
          <p>{xp}/100 XP</p>
      </div>
      <div className="history-card">
        <h4>Completed Tasks</h4>
        <ul>
          <li>Project Proposal</li>
          <li>Exercise Routine</li>
        </ul>
        <h4>Settings</h4>
        <p>Notifications: 🔔 On</p>
      </div>
    </div>
  );
}

export default MyPage;
