import React from 'react';
import { Link } from 'react-router-dom';

export default function BottomNav({ activePath }) {
  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${activePath === '/' ? 'active' : ''}`}>
        <span className="material-symbols-outlined">home</span>
        <span>Home</span>
      </Link>
      <Link to="/" className={`nav-item ${activePath === '/dashboard' ? 'active' : ''}`}>
        <span className="material-symbols-outlined">bar_chart</span>
        <span>Dashboard</span>
      </Link>
      <Link to="/profile" className={`nav-item ${activePath === '/profile' ? 'active' : ''}`}>
        <span className="material-symbols-outlined">assignment</span>
        <span>Assignment</span>
      </Link>
      <Link to="/" className="nav-item">
        <span className="material-symbols-outlined">payments</span>
        <span>Fee</span>
      </Link>
      <Link to="/settings" className={`nav-item ${activePath === '/settings' ? 'active' : ''}`}>
        <span className="material-symbols-outlined">settings</span>
        <span>Settings</span>
      </Link>
    </nav>
  );
}
