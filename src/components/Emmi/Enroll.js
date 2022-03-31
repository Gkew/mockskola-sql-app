import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./Enroll.css";
import Axios from "axios";
import coursesList from "../Axel/Courses";

export default function Apply() {
  const [studentFname, setstudentFname] = useState("");
  const [studentLname, setstudentLname] = useState("");
  const [studentEmail, setstudentEmail] = useState("");
  const [studentCourse, setstudentCourse] = useState("");
  const [studentsList, setstudentsList] = useState([]);

  const [coursesList, setCoursesList] = useState([]);

  function Apply(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_13w52j2",
        "template_spaceforce",
        e.target,
        "xSvyElvuHBArxnFko"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const addStudent = () => {
    Axios.post("http://localhost:3001/createStudent", {
      studentFname: studentFname,
      studentLname: studentLname,
      studentEmail: studentEmail,
      studentCourse: studentCourse,
    }).then(() => {
      setstudentsList([
        ...studentsList,

        {
          studentFname: studentFname,
          studentLname: studentLname,
          studentEmail: studentEmail,
          studentCourse: studentCourse,
        },
      ]);
    });
  };
  const getCourses = () => {
    Axios.get("http://localhost:3001/courses").then((response) => {
      setCoursesList(response.data);
    });
  };

  return (
    <div className="container">
      <form onSubmit={Apply}>
        <label>Subject:</label>
        <input type="text" name="subject" />
        <label>Firstname:</label>
        <input
          type="text"
          name="fname"
          onChange={(event) => {
            setstudentFname(event.target.value);
          }}
        />
        <label>Lastname:</label>
        <input
          type="text"
          name="lname"
          onChange={(event) => {
            setstudentLname(event.target.value);
          }}
        />
        <label>Email adress:</label>
        <input
          type="email"
          name="email"
          onChange={(event) => {
            setstudentEmail(event.target.value);
          }}
        />
        <label>Select your program:</label>
        <select
          type="text"
          name="course"
          onClick={getCourses}
          onChange={(event) => {
            setstudentCourse(event.target.value);
          }}
        >
          {" "}
          {coursesList.map((val) => {
            return <option>{val.course}</option>;
          })}
        </select>

        <button type="submit" value="Send Message" onClick={addStudent}>
          Apply
        </button>
      </form>
    </div>
  );
}
