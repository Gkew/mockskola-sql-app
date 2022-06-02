import "./Courses.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function Courses() {
  const [newcourse, setNewcourse] = useState(0);
  const [newteacher, setNewteacher] = useState(0);
  const [newweeks, setNewweeks] = useState(0);
  const [newinfo, setNewinfo] = useState(0);
  const [course, setCourse] = useState("");
  const [weeks, setWeeks] = useState(0);
  const [info, setInfo] = useState("");
  const [teacher, setTeacher] = useState("");
  const [coursesList, setCoursesList] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const addCourse = () => {
    Axios.post("http://localhost:3001/createCourses", {
      course: course,
      teacher: teacher,
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
    Axios.get("http://localhost:3001/courses").then((response) => {
      setCoursesList(response.data);
    });
  };
  const getUsers = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUsersList(
        response.data.filter((user) => {
          return user.role == "teacher";
        })
      );
      console.log(response.data);
    });
  };
  const deletekurs = (id) => {
    Axios.delete(`http://localhost:3001/deletecourses/${id}`).then(
      (response) => {
        setCoursesList(
          coursesList.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };

  const updateCourses = (id) => {
    Axios.put("http://localhost:3001/updateCourses", {
      course: newcourse,
      teacher: newteacher,
      weeks: newweeks,
      info: newinfo,
      id: id,
    }).then((response) => {
      setCoursesList(
        coursesList.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                course: newcourse,
                teacher: newteacher,
                weeks: newweeks,
                info: newinfo,
              }
            : val;
        })
      );
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
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
        </select>

        <label>Description:</label>
        <textarea
          maxLength="500"
          rows="12"
          cols="41"
          required
          type="text"
          onChange={(event) => {
            setInfo(event.target.value);
          }}
        />

        <label>Teacher:</label>
        <select
          type="text"
          onClick={getUsers}
          className="selectteacher"
          onChange={(event) => {
            setTeacher(event.target.value);
          }}
        >
          {" "}
          {usersList.map((val) => {
            return (
              <>
                <option value="" selected disabled hidden>
                  Choose here
                </option>{" "}
                <option>
                  {" "}
                  {val.fname} {val.lname}
                </option>{" "}
              </>
            );
          })}
        </select>

        <button onClick={addCourse} className="knapp">
          Add Course
        </button>
      </div>
      <div className="courses">
        <button onClick={getCourses} className="show">
          Show Courses
        </button>

        {coursesList.map((val, key) => {
          return (
            <div className="course">
              <div className="data">
                <h3>
                  Teacher: <p>{val.teacher} </p>
                </h3>
                <h3>
                  Course: <p>{val.course}</p>
                </h3>
                <h3>
                  Weeks: <p>{val.weeks}</p>
                </h3>
                <h3>
                  Description: <p>{val.info}</p>
                </h3>
                <button
                  className="delBtn"
                  onClick={() => {
                    deletekurs(val.id);
                  }}
                >
                  Delete
                </button>
                <div>
                  <select
                    type="text"
                    onClick={getUsers}
                    className="selectteacher"
                    onChange={(event) => {
                      setNewteacher(event.target.value);
                    }}
                  >
                    {" "}
                    {usersList.map((val) => {
                      return (
                        <>
                          <option value="" selected disabled hidden>
                            Choose here
                          </option>{" "}
                          <option>
                            {" "}
                            {val.fname} {val.lname}
                          </option>{" "}
                        </>
                      );
                    })}
                  </select>
                  <input
                    type="text"
                    placeholder="Course"
                    onChange={(event) => {
                      setNewcourse(event.target.value);
                    }}
                  />
                  <select
                    type="text"
                    placeholder="Comment"
                    onChange={(event) => {
                      setNewweeks(event.target.value);
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
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                  </select>

                  <textarea
                    type="text"
                    placeholder="Comment"
                    onChange={(event) => {
                      setNewinfo(event.target.value);
                    }}
                  />
                  <button
                    className="editBtn"
                    onClick={() => {
                      updateCourses(val.id);
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
