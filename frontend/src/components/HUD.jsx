import React from 'react';
import { getRequiredXP } from '../utils/experience';
import './HUD.css';

function HUD({ level, xp, coins, hp, maxHp }) {
  return (
    <div className="hud fixed top-0 left-0 w-full bg-black bg-opacity-70 flex justify-around items-center p-2 shadow-xl">
      <div>HP {hp}/{maxHp}</div>
      <div>Lvl {level}</div>
      <div className="hud-bar flex-1 mx-2 bg-gray-700 rounded h-2">
        <div className="bg-purple-500 h-2 rounded" style={{ width: `${(xp / getRequiredXP(level)) * 100}%` }}></div>
      </div>
      <div>{coins}💰</div>
    </div>
  );
}

export default HUD;
