import React from 'react';
import { getRequiredXP } from '../utils/experience';
import './StatusPage.css';

function StatusPage({ xp, level, stats, statPoints, allocateStat }) {
  return (
    <div className="page status-page">
      <h2 className="shadow-xl">Status</h2>
      <div className="status-card">
        <img src="/logo192.png" alt="avatar" className="avatar" />
        <h3>Sir Tasks-a-lot</h3>
        <p>Level {level}</p>
        <div className="xp-bar">
          <div className="progress" style={{ width: `${(xp / getRequiredXP(level)) * 100}%` }}></div>
        </div>
        <p>{xp}/{getRequiredXP(level)} XP</p>
        <p>Stat Points: {statPoints}</p>
        <div className="stats">
          {['STR','DEX','INT','VIT'].map(key => (
            <div key={key}>
              {key}: {stats[key]}{' '}
              <button onClick={() => allocateStat(key)} disabled={statPoints === 0}>+</button>
            </div>
          ))}
        </div>
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
