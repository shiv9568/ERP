const defaultData = {
  name: "KRISHNA BATRA",
  avatar: "avatar.png",
  rollNo: "22091859",
  email: "student@gmail.com",
  phone: "9105783630",
  fatherName: "MANOJ KUMAR",
  motherName: "SANGEETA BATRA",
  dob: "13/06/2003",
  officialEmail: "22091859@geu.ac.in",
  course: "BACHELOR OF BUSINESS ADMINISTRATION",
  courseCard: "BBA",
  year: "6",
  section: "FIN-D",
  classRoll: "0",
  enrollNo: "GE-22244354",
  uniRoll: "2404354",
  highSchool: "53.8",
  intermediate: "66.4",
  status: "Alumni",
  batch: "2022-2025",
  contactNo: "9058203198",
  bloodGroup: "A+ve",
  resiAddress: "House No. 4/670, Near Arya Kanya Inter College, Saharanpur, U.P.- 247001",
  validThrough: "30-06-2025",
  emergencyContact: "7417385008"
};


function getUserData() {
  const data = localStorage.getItem("geuStudentData");
  return data ? JSON.parse(data) : defaultData;
}

function saveUserData(data) {
  localStorage.setItem("geuStudentData", JSON.stringify(data));
}

// Function to populate HTML elements based on their ID matching "val-key" from the data object
function applyDataToDOM() {
  const data = getUserData();
  
  for (const key in data) {
    const elId = `val-${key}`;
    const el = document.getElementById(elId);
    
    // Some elements might be used multiple times on the same page, so we also support classes 
    // but here we just safely map if the exact ID exists
    if (el) {
      if (el.tagName === 'IMG') {
        el.src = data[key];
      } else {
        el.textContent = data[key];
      }
    }
  }

  // Handle elements that share the same data value but need a different ID
  const bottomNoEl = document.getElementById('val-bottomNo');
  if (bottomNoEl) {
    bottomNoEl.textContent = data.rollNo;
  }
}

// Run this immediately on script load
document.addEventListener('DOMContentLoaded', applyDataToDOM);
