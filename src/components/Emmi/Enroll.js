import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./Enroll.css";
import GetEnroll from "./GetEnroll";
import Axios from "axios";

export default function Apply() {
  const [studentFname, setstudentFname] = useState("");
  const [studentLname, setstudentLname] = useState("");
  const [studentEmail, setstudentEmail] = useState("");
  const [studentProgram, setstudentProgram] = useState("");
  const [studentsList, setstudentsList] = useState([]);

  const [programsList, setProgramsList] = useState([]);

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
      studentProgram: studentProgram,
    }).then(() => {
      setstudentsList([
        ...studentsList,

        {
          studentFname: studentFname,
          studentLname: studentLname,
          studentEmail: studentEmail,
          studentProgram: studentProgram,
        },
      ]);
    });
  };
  const getPrograms = () => {
    Axios.get("http://localhost:3001/programs").then((response) => {
      setProgramsList(response.data);
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
          name="program"
          onClick={getPrograms}
          onChange={(event) => {
            setstudentProgram(event.target.value);
          }}
        >
          {" "}
          {programsList.map((val) => {
            return <option>{val.program}</option>;
          })}
        </select>
        <button type="submit" value="Send Message" onClick={addStudent}>
          Apply
        </button>
      </form>
      <GetEnroll />
    </div>
  );
}
