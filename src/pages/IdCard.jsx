import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import logo from '../../logo.png';
import defaultAvatar from '../../avatar.png';
import './IdCard.css';

export default function IdCard() {
  const { userData } = useContext(UserContext);

  const handlePrint = () => {
    window.print();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="id-card-page-wrapper">
      <Header isViewer={true} />

      {/* PDF VIEWER TOOLBAR */}
      <div className="viewer-toolbar">
        <div className="viewer-toolbar-row">
          <button className="viewer-btn" title="First page">
            <span className="material-symbols-outlined" style={{color:'#666', fontSize:'20px'}}>first_page</span>
          </button>
          <button className="viewer-btn" title="Previous page">
            <span className="material-symbols-outlined" style={{color:'#666', fontSize:'20px'}}>chevron_left</span>
          </button>
          <input type="text" className="viewer-input" value="1" readOnly />
          <span style={{fontSize:'12px', color:'#444'}}>of 1</span>
          <button className="viewer-btn" title="Next page">
            <span className="material-symbols-outlined" style={{color:'#aaa', fontSize:'20px'}}>chevron_right</span>
          </button>
          <button className="viewer-btn" title="Last page">
            <span className="material-symbols-outlined" style={{color:'#aaa', fontSize:'20px'}}>last_page</span>
          </button>
          <button className="viewer-btn" title="Back" style={{marginLeft:'4px'}}>
            <span className="material-symbols-outlined" style={{color:'#aaa', fontSize:'20px'}}>arrow_back</span>
          </button>
        </div>
        <div className="viewer-toolbar-row">
          <input type="text" className="viewer-find-input" style={{marginLeft:0, width:'100px'}} placeholder="" />
          <span className="find-next-text" style={{marginLeft:'6px', fontSize:'12px', color:'#555'}}>Find | Next</span>
          <div style={{flex:1}}></div>
          <button className="viewer-btn" title="Save" onClick={handlePrint} style={{display:'flex', alignItems:'center', gap:'2px'}}>
            <span className="material-symbols-outlined" style={{color:'#2a6', fontSize:'20px'}}>save</span>
            <span className="material-symbols-outlined" style={{fontSize:'14px', color:'#444'}}>arrow_drop_down</span>
          </button>
          <button className="viewer-btn" title="Refresh" onClick={handleRefresh} style={{marginLeft:'4px'}}>
            <span className="material-symbols-outlined" style={{color:'#2196f3', fontSize:'20px'}}>refresh</span>
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="id-card-scroll-outer">
        <div className="id-card-panels">
          
          {/* FRONT PANEL */}
          <div className="id-panel id-panel-front">
            <div className="provisional-strip">PROVISIONAL ID CARD</div>
            <div className="front-inner">
              <div className="front-header">
                <div className="front-logo-group">
                  <div className="uni-name-block">
                    <span className="uni-red">Graphic Era</span>
                    <span className="uni-deemed">Deemed to be</span>
                    <span className="uni-black">University</span>
                    <span className="uni-city">DEHRADUN</span>
                  </div>
                  <img src={logo} alt="Logo" className="front-logo-img" />
                  <div className="naac-block">
                    <span>NAAC</span>
                    <span>GRADE <span className="naac-grade">A+</span></span>
                    <span>ACCREDITED</span>
                  </div>
                </div>
                <div className="front-address">
                  Bell Road, Clement Town<br/>
                  Dehradun-248002<br/>
                  Uttarakhand India<br/>
                  Ph.: 0135-2644183<br/>
                  2642799<br/>
                  www.geu.ac.in
                </div>
              </div>
              <div className="front-body">
                <img src={userData.avatar && userData.avatar.length > 50 ? userData.avatar : defaultAvatar} alt="Student Photo" className="id-photo" />
                <div className="id-details">
                  <div className="id-student-name">{userData.name}</div>
                  <div className="id-course-label">{userData.courseCard}</div>
                  <div className="id-info-row">
                    <div className="id-info-label">Admission No.</div>
                    <div className="id-info-colon">:</div>
                    <div className="id-info-val">{userData.rollNo}</div>
                  </div>
                  <div className="id-info-row">
                    <div className="id-info-label">Batch</div>
                    <div className="id-info-colon">:</div>
                    <div className="id-info-val">{userData.batch}</div>
                  </div>
                  <div className="id-info-row">
                    <div className="id-info-label">Father's Name</div>
                    <div className="id-info-colon">:</div>
                    <div className="id-info-val">{userData.fatherName}</div>
                  </div>
                </div>
              </div>
              <div className="front-bottom-roll">{userData.rollNo}</div>
            </div>
          </div>

          {/* BACK PANEL */}
          <div className="id-panel id-panel-back">
            <div className="back-info-row">
              <div className="back-info-label">Contact No.</div>
              <div className="back-info-colon">:</div>
              <div className="back-info-val">{userData.contactNo}</div>
            </div>
            <div className="back-info-row">
              <div className="back-info-label">Blood Group</div>
              <div className="back-info-colon">:</div>
              <div className="back-info-val">{userData.bloodGroup}</div>
            </div>
            <div className="back-info-row">
              <div className="back-info-label">E-mail</div>
              <div className="back-info-colon">:</div>
              <div className="back-info-val" style={{textTransform:'lowercase', wordBreak:'break-all'}}>{userData.email}</div>
            </div>
            <div className="back-info-row">
              <div className="back-info-label">Resi. Address</div>
              <div className="back-info-colon">:</div>
              <div className="back-info-val">{userData.resiAddress}</div>
            </div>
            <div className="back-info-row">
              <div className="back-info-label">Valid Through</div>
              <div className="back-info-colon">:</div>
              <div className="back-info-val">{userData.validThrough}</div>
            </div>
            <div className="back-info-row">
              <div className="back-info-label emergency-label">Emergency Contact</div>
              <div className="back-info-colon">:</div>
              <div className="back-info-val emergency-val">{userData.emergencyContact}</div>
            </div>
            <div className="back-separator">
              <div className="return-text">If found please return to :</div>
              <div className="issued-by">ISSUED BY</div>
            </div>
            <div className="back-footer">
              <div className="bf-uni-name">Graphic Era (Deemed to be University)</div>
              <div className="bf-address">
                Bell Road, Clement Town Dehradun, Uttarakhand India -248002<br/>
                Phone No : +91-135-2643421, 2642727
              </div>
              <div className="bf-web">www.geu.ac.in</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
