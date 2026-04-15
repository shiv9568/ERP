import React from 'react';
import logo from '../../logo.png';

export default function Header({ isViewer }) {
  return (
    <header className={`header ${isViewer ? 'viewer-header' : ''}`}>
      {isViewer ? (
        <div className="brand-bg">
          <div className="brand" style={{paddingLeft: 0}}>
            <img src={logo} alt="Graphic Era Logo" className="brand-logo" />
            <div className="brand-separator"></div>
            <div className="brand-text">
              <div className="brand-title">
                <span style={{color: '#d52924'}}>Graphic</span>{' '}
                <span style={{color: '#333'}}>Era</span>
              </div>
              <div className="brand-subtitle">Deemed to be University</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="brand">
          <img src={logo} alt="Graphic Era Logo" className="brand-logo" />
          <div className="brand-separator"></div>
          <div className="brand-text">
            <div className="brand-title">
              <span style={{color: '#d52924'}}>Graphic</span>{' '}
              <span style={{color: '#333'}}>Era</span>
            </div>
            <div className="brand-subtitle">Deemed to be University</div>
          </div>
        </div>
      )}
      
      {isViewer && <div className="blue-spacer"></div>}
      
      <button className="menu-btn">
        <span className="material-symbols-outlined" style={{fontWeight: 'bold'}}>menu</span>
      </button>
    </header>
  );
}
