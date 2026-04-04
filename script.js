const defaultData = {
  name: "KRI BTRA",
  avatar: "avatar.png",
  rollNo: "2201859",
  email: "ja19@gmail.com",
  phone: "91562130",
  fatherName: "MAJ MAR",
  motherName: "SEETA RA",
  dob: "13/06/2122",
  officialEmail: "220913159@geu.ac.in",
  course: "BACHELOR OF BUSINESS ADMINISTRATION",
  courseCard: "BBA",
  year: "6",
  section: "FIN-D",
  classRoll: "0",
  enrollNo: "GE-2224344354",
  uniRoll: "24154",
  highSchool: "12.8",
  intermediate: "122.4",
  status: "Alumni",
  batch: "2022-2025"
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
