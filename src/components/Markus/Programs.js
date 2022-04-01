import "./Programs.css";
import { useState, useEffect } from "react";
import Axios from "axios";


function Programs() {

  const [program, setProgram] = useState("");
  const [description, setDescription] = useState("");
  const [courses, setCourses] = useState("");
  const [admin, setAdmin] = useState("");
  const [programsList, setProgramsList] = useState([]);


  const addProgram = () => {
    Axios.post("http://localhost:3001/createPrograms", {
      program: program,
      description: description,
      courses: courses,
      admin: admin,
    }).then(() => {
      setProgramsList([
        ...programsList,

        {
          program: program,
          description: description,
          courses: courses,
          admin: admin,
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
    <div className="Programs">
      <div className="information">


        <label>Program:</label>
        <input
          type="text"
          onChange={(event) => {
            setProgram(event.target.value);
          }}
        />

        <label>Description:</label>
        <textarea
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <button onClick={addProgram}>Add Course</button>
      </div>
      <div className="courses">

        <button onClick={getPrograms}>Show Courses</button>

        {programsList.map((val, key) => {
          return (
            <div className="course">

              <div className="data">
                <h3>Teacher: <p>{val.programs} </p></h3>
                <h3>Course: <p>{val.description}</p></h3>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );

}

export default Programs;