import React from 'react';
import { getRequiredXP } from '../utils/experience';
import XPBar from './XPBar';
import './HUD.css';

function HUD({ level, xp, coins, hp, maxHp }) {
  return (
    <div className="hud fixed top-0 left-0 w-full bg-black bg-opacity-70 flex justify-around items-center p-2 shadow-xl">
      <div>HP {hp}/{maxHp}</div>
      <div>Lvl {level}</div>
      <div className="flex-1 mx-2">
        <XPBar xp={xp} level={level} />
      </div>
      <div>{coins}💰</div>
    </div>
  );
}

export default HUD;
