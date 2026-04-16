import React, { useState } from 'react';
import logo from '../../logo.png';
import qrCode from '../../qr-code.png';

export default function Header({ isViewer }) {
  const [showQR, setShowQR] = useState(false);

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = qrCode || "qr-code.png";
    link.download = "GraFest_2026_E-Pass.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
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
        
        <button className="menu-btn" onClick={() => setShowQR(true)}>
          <span className="material-symbols-outlined" style={{fontWeight: 'bold'}}>menu</span>
        </button>
      </header>

      {/* QR Modal Entry Pass */}
      {showQR && (
        <div className="qr-modal-overlay" id="qrModal" style={{ display: 'flex' }}>
          <div className="qr-modal-container">
            <button className="qr-close-btn" id="qrCloseBtn" onClick={() => setShowQR(false)}>&times;</button>
            
            <div className="qr-header">
              <div className="qr-header-left">
                <span className="material-symbols-outlined qr-header-icon">confirmation_number</span>
                <div className="qr-header-text">
                  <span className="qr-subtitle">OFFICIAL ENTRY PASS</span>
                  <span className="qr-title">GraFest 2026</span>
                </div>
              </div>
              <div className="qr-header-right">
                Powered by<br /><b>College ERP</b>
              </div>
            </div>
            
            <div className="qr-separator">
              <div className="qr-separator-cutout-left"></div>
              <div className="qr-separator-cutout-right"></div>
            </div>

            <div className="qr-body">
              <div className="qr-img-wrapper">
                <img src={qrCode || "qr-code.png"} alt="QR Code" />
              </div>
              <button className="qr-download-btn" onClick={downloadQR}>
                <span className="material-symbols-outlined">download</span> Download E-Pass
              </button>
            </div>
            
            <div className="qr-footer">
              <div className="qr-footer-left">
                <span className="material-symbols-outlined shield-icon" style={{fontVariationSettings: "'FILL' 1"}}>local_police</span> Verified & Secured Pass
              </div>
              <div className="qr-footer-right">
                <div className="qr-pill-yellow">
                  <span className="material-symbols-outlined pill-icon">calendar_month</span> 2026
                </div>
                <div className="qr-pill-white">
                  <span className="material-symbols-outlined pill-icon" style={{fontVariationSettings: "'FILL' 1"}}>star</span> GraFest
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
