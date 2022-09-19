import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Folder.css";
const Folder = () => {
  const [teacher, setteacher] = useState(false);
  const [Student, setStudent] = useState({
    student1: false,
    student2: false,
    student3: false,
    student4: false,
  });

  console.log(Student);
  const handlechange = (e) => {
    const { name, checked } = e.target;
    setStudent({ ...Student, [name]: checked });
  };

  useEffect(() => {
    if (
      Student.student1 === true &&
      Student.student2 === true &&
      Student.student3 === true &&
      Student.student4 === true
    ) {
      setteacher(true);
    } 
    else {
      setteacher(false);
    }
  }, [Student, teacher, setteacher]);
  console.log(teacher, "teacher");


  return (
    <div>
      <div id="main">
        <div>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            value={teacher}
            checked={teacher}
          />
          <label style={{ fontSize: "29px" }}>Teacher</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="student1"
            id="Student1"
            value={Student.student1}
            onClick={handlechange}
          />
          <label>Student1</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="student2"
            id="Student2"
            value={Student.student2}
            onClick={handlechange}
          />
          <label>Student2</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="student3"
            id="Student3"
            value={Student.student3}
            onClick={handlechange}
          />
          <label>Student3</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="student4"
            id="Student4"
            value={Student.student4}
            onClick={handlechange}
          />
          <label>Student4</label>
        </div>
      </div>
    </div>
  );
};

export default Folder;
