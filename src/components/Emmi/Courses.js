import "./Courses.css";
import { useState, useEffect } from "react";
import Axios from "axios";




function Courses () {

  const [course, setCourse] = useState("");
  const [weeks, setWeeks] = useState(0);
  const [info, setInfo] = useState("");
  const [teacher, setTeacher] = useState("");
  const [coursesList, setCoursesList] = useState([]);


  const addCourse = () => {
    Axios.post("http://localhost:3001/createCourses", {
    course: course,
    weeks: weeks,
    info: info,
    }).then(() => {
      setCoursesList([
        ...coursesList,
        
        {
          course: course,
          teacher: teacher,
          weeks: weeks,
          info: info,
        },
      ]);
    });
  };

  const getCourses = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setCoursesList(response.data);
    });
  };


  return (
    <div className="Courses">
      <div className="information">
  

        <label>Course:</label>
        <input
          type="text"
          onChange={(event) => {
            setCourse(event.target.value);
          }}
        />

        <label>Weeks:</label>
        <select
          type="number"
          onChange={(event) => {
            setWeeks(event.target.value);
          }}
        > 
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>

        <label>Description:</label>
        <textarea
          type="text"
          onChange={(event) => {
            setInfo(event.target.value);
          }}
        />
        <select onChange={(e) => setTeacher(e.target.value)}>
        {coursesList.map(x => { return( <option >{x.fname}</option> )})}
        </select>

        <button onClick={addCourse}>Add Course</button>
      </div>
      <div className="courses">

        <button onClick={getCourses}>Show Courses</button>

        {coursesList.map((val, key) => {
          return (
            <div className="course">

              <div className="data">
              <h3>Teacher: <p>{val.fname} {val.role}</p></h3>
                <h3>Course: <p>{val.course}</p></h3>
                <h3>Weeks: <p>{val.weeks}</p></h3>
                <h3>Description: <p>{val.info}</p></h3>

              </div>

            </div>
          );
        })}
      </div>
   
    </div>
  );

}

export default Courses;