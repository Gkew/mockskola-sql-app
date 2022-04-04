import React, { useState } from 'react'
import Axios from 'axios';
import './GetEnroll.css'

function GetEnroll() {
    const [applysList, setApplysList] = useState([]);

    const getApply = () => {
        Axios.get("http://localhost:3001/students").then((response) => {
          setApplysList(response.data);
        });
    };
    const deleteApplication = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
          setApplysList(
            applysList.filter((val) => {
              return val.id !== id;
            })
          );
        });
      };

  return (
    <div className='Main-getenroll'>
    <div className='getApplyBtn'>
    <button onClick={getApply}>View applications</button>
    </div>
        {applysList.map((val, key) => {
          return (
            <div className='ApplyList'>
            <div><b>Name:</b> <p>{val.studentFname}</p></div>
            <div><b>Lastname: </b><p>{val.studentLname}</p></div>
            <div><b>Email: </b><p>{val.studentEmail}</p></div>
            <div><b>Program: </b><p>{val.studentProgram}</p></div>
            
            <div className='delApply'>
            <button 
            onClick={() => {
              deleteApplication(val.id);
            }}>Delete</button></div>
            </div>

          )
          


        })}
      </div>
  )
}

export default GetEnroll