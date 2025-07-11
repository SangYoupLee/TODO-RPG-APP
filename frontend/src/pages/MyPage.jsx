import React from 'react';
import './MyPage.css';
import { getRequiredXP } from '../utils/experience';
import XPBar from '../components/XPBar';

function MyPage({ xp, level, completed, setTheme, theme, coins }) {
  return (
    <div className="page my-page">
      <h2>My Page</h2>
      <div className="status-card">
        <h3>Warrior John</h3>
        <p>Level {level}</p>
        <XPBar xp={xp} level={level} />
        <p>{coins} coins</p>
      </div>
      <div className="history-card">
        <h4>Completed Quests</h4>
        <ul>
          {completed.map(q => (
            <li key={q.id}>{q.title}</li>
          ))}
          {completed.length === 0 && <li>No quests yet</li>}
        </ul>
        <h4>Theme</h4>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>
    </div>
  );
}

export default MyPage;
