import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingAddButton.css';

function FloatingAddButton() {
  const navigate = useNavigate();
  return (
    <button className="fab" onClick={() => navigate('/create')}>+</button>
  );
}

export default FloatingAddButton;