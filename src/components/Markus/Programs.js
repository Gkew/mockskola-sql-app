import "./Programs.css";
import { useState } from "react";
import Axios from "axios";
//  import Select from 'react-select'

function Programs() {

  const [program, setProgram] = useState("");
  const [description, setDescription] = useState("");
  const [courses, setCourses] = useState("");
  const [admin, setAdmin] = useState("");
  const [programsList, setProgramsList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [coursesList, setCoursesList] = useState([]);

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
  const getCourses = () => {
    Axios.get("http://localhost:3001/courses").then((response) => {
      setCoursesList(response.data);
    });
  };
  const getUsers = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUsersList(response.data);
    });
  };

        const deleteProgram = (id) => {
        Axios.delete(`http://localhost:3001/deleteprogram/${id}`).then((response) => {
          setProgramsList(
            programsList.filter((val) => {
              return val.id !== id;
            })
          );
        });
  };

  const [newprogram, setNewprogram] = useState(0);
  const [newdescription, setNewdescription] = useState(0);
  const [newcourses, setNewcourses] = useState(0);
  const [newadmin, setNewadmin] = useState(0);
  
  const updateProgram = (id) => {
        Axios.put("http://localhost:3001/updateprogram", { program: newprogram, description: newdescription, courses: newcourses, admin: newadmin, id: id }).then(
          (response) => {
            setProgramsList(
              programsList.map((val) => {
                return val.id === id
                  ? {
                      id: val.id,
                      program: newprogram,
                      description: newdescription,
                      courses: newcourses,
                      admin: newadmin,
                      
                    }
                    
                  : val;
              })
            );
          }
        );
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
        <label>Admin:</label>
        <select type="text" onClick={getUsers} onChange={(event) => {
          setAdmin(event.target.value);
        }}>  {usersList.map((val) =>{ return( <option >Name: {val.fname} Role: {val.role}</option> )})}

</select>
<label>Courses:</label>
<select style={{height: "200px"}} type="text" onClick={getCourses} onChange={(event) => {
  setCourses(event.target.value);
}}>  {coursesList.map((val) =>{ return( <option >{val.course}</option> )})}
</select>

        <button onClick={addProgram}>Add Program</button>
      </div>
      <div className="courses">

        <button onClick={getPrograms}>Show Programs</button>

        {programsList.map((val, key) => {
          return (
            <div className="course">

              <div className="data">
                <h3>Program: <p>{val.program} </p></h3>
                <h3>Description: <p>{val.description}</p></h3>
                <h3>Admin: <p>{val.admin} </p></h3>
                <h3>Course: <p>{val.courses}</p></h3>

              </div>

              <button
                className="delBtn"
                onClick={() => {
                  deleteProgram(val.id);
                }}
              >
                Delete
              </button>

              <div>
              <input
              type="text"
              placeholder="Program"
              onChange={(event) => {
                setNewprogram(event.target.value);
              }}/>
              <textarea
              type="text"
              placeholder="Description"
              onChange={(event) => {
                setNewdescription(event.target.value);
              }}/>
              <input
              type="text"
              placeholder="Courses"
              onChange={(event) => {
                setNewcourses(event.target.value);
              }}/>
              <input
              type="text"
              placeholder="Admin"
              onChange={(event) => {
                setNewadmin(event.target.value);
              }}/>
              </div>

              <button
                className="updateBtn"
                onClick={() => {
                  updateProgram(val.id);
                }}
              >
                Update
              </button>

            </div>
          );
        })}
      </div>

    </div>
  );

}

export default Programs;