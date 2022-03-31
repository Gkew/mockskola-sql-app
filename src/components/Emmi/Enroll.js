import emailjs from "emailjs-com";
import React, {useState} from 'react';
import './Enroll.css'
import Axios from "axios";
import coursesList from '../Axel/Courses'

export default function Apply() {
  const [studentFname, setstudentFname] = useState("");
  const [studentLname, setstudentLname] = useState("");
  const [studentEmail, setstudentEmail] = useState("");
  const [studentCourse, setstudentCourse] = useState("");
  const [studentsList, setstudentsList] = useState([])

  const [coursesList, setCoursesList] = useState([]);


    function Apply(e) {
        e.preventDefault();

    emailjs.sendForm('service_13w52j2', 'template_spaceforce', e.target, "xSvyElvuHBArxnFko")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
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

    return(

            <div className="container">
            <form onSubmit={Apply}>
                            <input type="text" placeholder="Subject.." name="subject"/>

                            <input type="text" placeholder="Firstname" name="fname" onChange={(event) => {
                              setstudentFname(event.target.value);
                            }}/>

                            <input type="text" placeholder="Lastname" name="lname" onChange={(event) => {
                              setstudentLname(event.target.value);
                            }}/>
                            <input type="email" placeholder="Email Address" name="email" onChange={(event) => {
                              setstudentEmail(event.target.value);
                            }}/>

                            <select type="text" placeholder="Programs" name="course" onClick={getCourses} onChange={(event) => {
                              setstudentCourse(event.target.value);
                            }}>  {coursesList.map((val) =>{ return( <option >{val.course}</option> )})}

                            </select>

                            <input type="submit" value="Send Message" onClick={addStudent}/>

                </form>

        </div>
    )
}