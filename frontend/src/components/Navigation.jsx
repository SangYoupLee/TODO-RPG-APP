import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="nav shadow-xl">
      <Link to="/" className={`${pathname === '/' ? 'active' : ''} hover:scale-105`}>Tasks</Link>
      <Link to="/status" className={`${pathname === '/status' ? 'active' : ''} hover:scale-105`}>Status</Link>
      <Link to="/mypage" className={`${pathname === '/mypage' ? 'active' : ''} hover:scale-105`}>My Page</Link>
    </nav>
  );
}

export default Navigation;
