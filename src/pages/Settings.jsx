import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';

export default function Settings() {
  const { userData, saveUserData } = useContext(UserContext);
  const [formData, setFormData] = useState(userData);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(userData);
  }, [userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      setFormData({ ...formData, avatar: evt.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    saveUserData(formData);
    alert("Identity saved successfully!\nThis is only saved on this device.");
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="settings-container" style={{background:'#fff', margin:'15px', borderRadius:'8px', padding:'15px', boxShadow:'0 2px 5px rgba(0,0,0,0.05)'}}>
        <div style={{color:'#29b6f6', fontSize:'20px', marginBottom:'20px', textAlign:'center', fontWeight:'bold'}}>Edit Identity</div>
        
        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Full Name</label>
          <input type="text" name="name" value={formData.name || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>
        
        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Profile Image (URL or take photo Base64)</label>
          <input type="file" accept="image/*" onChange={handleFileChange} style={{border:'none', padding:'0'}} />
          <small style={{color:'#888', marginTop:'5px'}}>Select an image to change avatar</small>
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Roll Number (for profile)</label>
          <input type="text" name="rollNo" value={formData.rollNo || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Personal Email</label>
          <input type="email" name="email" value={formData.email || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Phone No</label>
          <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Father's Name</label>
          <input type="text" name="fatherName" value={formData.fatherName || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Mother's Name</label>
          <input type="text" name="motherName" value={formData.motherName || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>D.O.B.</label>
          <input type="text" name="dob" value={formData.dob || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Official Email</label>
          <input type="email" name="officialEmail" value={formData.officialEmail || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Course (Full Name)</label>
          <input type="text" name="course" value={formData.course || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Course (Short Format for ID card)</label>
          <input type="text" name="courseCard" value={formData.courseCard || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Year / Sem</label>
          <input type="text" name="year" value={formData.year || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Section</label>
          <input type="text" name="section" value={formData.section || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Class Roll No</label>
          <input type="text" name="classRoll" value={formData.classRoll || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Enrollment No</label>
          <input type="text" name="enrollNo" value={formData.enrollNo || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>University Roll No</label>
          <input type="text" name="uniRoll" value={formData.uniRoll || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>HighSchool %</label>
          <input type="text" name="highSchool" value={formData.highSchool || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Intermediate %</label>
          <input type="text" name="intermediate" value={formData.intermediate || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Status</label>
          <input type="text" name="status" value={formData.status || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Batch (ID Card)</label>
          <input type="text" name="batch" value={formData.batch || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div style={{borderTop: '2px solid #29b6f6', margin: '15px 0 10px', paddingTop: '10px'}}>
          <div style={{fontSize:'13px', fontWeight:'bold', color:'#29b6f6', marginBottom:'12px'}}>📋 ID Card Back Panel</div>
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Contact No.</label>
          <input type="text" name="contactNo" value={formData.contactNo || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Blood Group</label>
          <input type="text" name="bloodGroup" value={formData.bloodGroup || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Residential Address</label>
          <input type="text" name="resiAddress" value={formData.resiAddress || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Valid Through (ID Expiry)</label>
          <input type="text" name="validThrough" value={formData.validThrough || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <div className="form-group" style={{marginBottom:'15px', display:'flex', flexDirection:'column'}}>
          <label style={{fontSize:'13px', color:'#666', marginBottom:'5px', fontWeight:'bold'}}>Emergency Contact No.</label>
          <input type="text" name="emergencyContact" value={formData.emergencyContact || ''} onChange={handleChange} style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px', fontSize:'14px'}} />
        </div>

        <button onClick={handleSubmit} style={{background:'#29b6f6', color:'white', border:'none', width:'100%', padding:'15px', fontSize:'16px', borderRadius:'4px', fontWeight:'bold', cursor:'pointer', marginTop:'10px'}}>
          Save Identity
        </button>
      </div>
      <br/><br/><br/>
    </div>
  );
}
