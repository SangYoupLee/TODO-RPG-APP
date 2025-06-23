import React from 'react';
import { getRequiredXP } from '../utils/experience';
import './XPBar.css';

function XPBar({ xp, level }) {
  const width = Math.min(100, (xp / getRequiredXP(level)) * 100);
  return (
    <div className="xp-bar-component">
      <div className="xp-progress" style={{ width: `${width}%` }} />
    </div>
  );
}

export default XPBar;
