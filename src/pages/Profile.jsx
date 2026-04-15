import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import defaultAvatar from '../../avatar.png';

export default function Profile() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="marquee-container">
        <marquee scrollamount="5">75% attendance is mandatory to be eligible for exams.</marquee>
      </div>

      <div className="profile">
        <img src={userData.avatar && userData.avatar.length > 50 ? userData.avatar : defaultAvatar} alt="Student Avatar" />
        <h2>{userData.name}</h2>
        <div className="roll-no">{userData.rollNo}</div>
        <div className="contact">
          <div><span className="material-symbols-outlined" style={{fontSize:'16px'}}>mail</span> {userData.email}</div>
          <div><span className="material-symbols-outlined" style={{fontSize:'16px'}}>call</span> {userData.phone}</div>
        </div>
      </div>

      <div className="id-card-section">
        <div className="id-card-header" onClick={() => navigate('/id-card')}>
          <span className="material-symbols-outlined">badge</span> ID Card
        </div>
        <div className="id-card-body">
          <div className="row"><div className="label">Father Name :</div><div className="value">{userData.fatherName}</div></div>
          <div className="row"><div className="label">Mother Name :</div><div className="value">{userData.motherName}</div></div>
          <div className="row"><div className="label">D.O.B. :</div><div className="value">{userData.dob}</div></div>
          <div className="row"><div className="label">Official Email :</div><div className="value" style={{textTransform:'lowercase'}}>{userData.officialEmail}</div></div>
          <div className="row"><div className="label">College :</div><div className="value" style={{textTransform:'capitalize'}}>Graphic Era (Deemed to be University)</div></div>
          <div className="row"><div className="label">Course :</div><div className="value">{userData.course}</div></div>
          <div className="row"><div className="label">Specialization :</div><div className="value"></div></div>
          <div className="row"><div className="label">Year/Sem :</div><div className="value">{userData.year}</div></div>
          <div className="row"><div className="label">Branch :</div><div className="value">N/A</div></div>
          <div className="row"><div className="label">Section :</div><div className="value">{userData.section}</div></div>
        </div>
      </div>
      
      <br />
      <div className="search-container" style={{position:'relative', zIndex:1}}>
        <input type="text" className="search" placeholder="Search Modules.." />
        <button className="search-icon-btn">
          <span className="material-symbols-outlined">apps</span>
        </button>
      </div>
      <br /><br /><br />
    </div>
  );
}
