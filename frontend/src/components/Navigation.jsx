import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <Link to="/" className={pathname === '/' ? 'active' : ''}>Tasks</Link>
      <Link to="/status" className={pathname === '/status' ? 'active' : ''}>Status</Link>
      <Link to="/mypage" className={pathname === '/mypage' ? 'active' : ''}>My Page</Link>
    </nav>
  );
}

export default Navigation;
