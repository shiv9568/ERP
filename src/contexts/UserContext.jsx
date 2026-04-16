import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const defaultData = {
  name: "KRISHNA BATRA",
  avatar: "avatar.png",
  rollNo: "22091859",
  email: "jahanvibatra19@gmail.com",
  phone: "9105783630",
  fatherName: "MANOJ KUMAR",
  motherName: "SANGEETA BATRA",
  dob: "13/06/2022",
  officialEmail: "22091859@geu.ac.in",
  course: "BACHELOR OF BUSINESS ADMINISTRATION",
  courseCard: "BBA",
  year: "6",
  section: "FIN-D",
  classRoll: "0",
  enrollNo: "GE-224354",
  uniRoll: "24044",
  highSchool: "3.8",
  intermediate: "6.4",
  status: " Student",
  batch: "2022-2025",
  contactNo: "9058203198",
  bloodGroup: "A+ve",
  resiAddress: "House No. 4/670, Near Arya Kanya Inter College, Saharanpur, U.P.- 247001",
  validThrough: "30-06-2025",
  emergencyContact: "7417385008"
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(defaultData);

  useEffect(() => {
    const data = localStorage.getItem("geuStudentData");
    if (data) {
      try {
        setUserData(JSON.parse(data));
      } catch (e) { }
    }
  }, []);

  const saveUserData = (newData) => {
    setUserData(newData);
    localStorage.setItem("geuStudentData", JSON.stringify(newData));
  };

  return (
    <UserContext.Provider value={{ userData, saveUserData }}>
      {children}
    </UserContext.Provider>
  );
};
