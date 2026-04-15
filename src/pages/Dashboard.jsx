import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import defaultAvatar from '../../avatar.png'; // Fallback avatar

export default function Dashboard() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      {/* Marquee Area */}
      <div className="marquee-container">
        <marquee scrollamount="5">75% attendance is mandatory to be eligible for exams.</marquee>
      </div>

      {/* D. PROFILE CARD */}
      <div className="profile">
        <img src={userData.avatar && userData.avatar.length > 50 ? userData.avatar : defaultAvatar} alt="Student Avatar" />
        <h2>{userData.name}</h2>
        <div className="roll-no">{userData.rollNo}</div>
        <div className="contact">
          <div>
            <span className="material-symbols-outlined" style={{fontSize: '16px'}}>mail</span>
            <span>{userData.email}</span>
          </div>
          <div>
            <span className="material-symbols-outlined" style={{fontSize: '16px'}}>call</span>
            <span>{userData.phone}</span>
          </div>
        </div>
      </div>

      {/* E. ID Card SECTION */}
      <div className="id-card-section">
        <div className="id-card-header" onClick={() => navigate('/id-card')}>
          <span className="material-symbols-outlined">badge</span> ID Card
        </div>
        <div className="id-card-body">
          <div className="row"><div className="label">Father Name :</div><div className="value">{userData.fatherName}</div></div>
          <div className="row"><div className="label">Mother Name :</div><div className="value">{userData.motherName}</div></div>
          <div className="row"><div className="label">D.O.B. :</div><div className="value">{userData.dob}</div></div>
          <div className="row"><div className="label">Official Email :</div><div className="value" style={{textTransform: 'lowercase'}}>{userData.officialEmail}</div></div>
          <div className="row"><div className="label">College :</div><div className="value" style={{textTransform: 'capitalize'}}>Graphic Era (Deemed to be University)</div></div>
          <div className="row"><div className="label">Course :</div><div className="value">{userData.course}</div></div>
          <div className="row"><div className="label">Specialization :</div><div className="value"></div></div>
          <div className="row"><div className="label">Year/Sem :</div><div className="value">{userData.year}</div></div>
          <div className="row"><div className="label">Branch :</div><div className="value">N/A</div></div>
          <div className="row"><div className="label">Section :</div><div className="value">{userData.section}</div></div>
          <div className="row"><div className="label">Class Roll No. :</div><div className="value">{userData.classRoll}</div></div>
          <div className="row"><div className="label">Enroll No. :</div><div className="value">{userData.enrollNo}</div></div>
          <div className="row"><div className="label">University Roll No. :</div><div className="value">{userData.uniRoll}</div></div>
          <div className="row"><div className="label">HighSchool % :</div><div className="value">{userData.highSchool}</div></div>
          <div className="row"><div className="label">Intermediate % :</div><div className="value">{userData.intermediate}</div></div>
          <div className="row"><div className="label">Status :</div><div className="value" style={{textTransform: 'capitalize'}}>{userData.status}</div></div>
        </div>
      </div>

      <br />

      {/* B. SEARCH BAR (Modules) */}
      <div className="search-container">
        <input type="text" className="search" placeholder="Search Modules.." />
        <button className="search-icon-btn">
          <span className="material-symbols-outlined">apps</span>
        </button>
      </div>

      {/* C. DASHBOARD GRID */}
      <div className="grid-container">
        <div className="grid">
          <a href="#" className="grid-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2828/2828096.png" className="icon" alt="Academic" />
            <span>Academic</span>
          </a>
          <a href="#" className="grid-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3225/3225194.png" className="icon" alt="Fee" />
            <span>Fee</span>
          </a>
          <a href="#" className="grid-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3421/3421106.png" className="icon" alt="Circular" />
            <span>Circular</span>
          </a>
          <a href="#" className="grid-card">
            <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" className="icon" alt="Exam" />
            <span>Exam</span>
          </a>
          <a href="#" className="grid-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" className="icon" alt="Placement" />
            <span>Placement</span>
          </a>
          <a href="#" className="grid-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2883/2883921.png" className="icon" alt="Hostel" />
            <span>Hostel</span>
          </a>
          <a href="#" className="grid-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3076/3076344.png" className="icon" alt="Grievance" />
            <span>Grievance</span>
          </a>
          <div className="grid-card" style={{visibility: 'hidden'}}></div>
          <div className="grid-card" style={{visibility: 'hidden'}}></div>
        </div>
      </div>

      {/* OTHER SERVICES CARD */}
      <div className="other-services">
        <div className="other-services-header">
          <span className="material-symbols-outlined">settings</span>
          Other Services
        </div>
        <div className="other-services-body">
        </div>
      </div>

      <br /><br /><br />
    </div>
  );
}
