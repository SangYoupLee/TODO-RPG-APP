import React from 'react';
import './MyPage.css';

function CompletedPage({ completed }) {
  return (
    <div className="page">
      <h2 className="shadow-xl">Completed Quests</h2>
      <div className="history-card">
        <ul>
          {completed.map(q => (
            <li key={q.id}>{q.title} - {q.completedAt}</li>
          ))}
          {completed.length === 0 && <li>No quests yet</li>}
        </ul>
      </div>
    </div>
  );
}

export default CompletedPage;
