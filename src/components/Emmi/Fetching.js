import React, {useState} from 'react'
import Axios from 'axios'

function Fetching() {
    const [usersList, setUsersList] = useState([]);

    const getUser = () => {
        Axios.get("http://localhost:3001/users").then((response) => {
          setUsersList(response.data);
        });
      };

    return (

        <div className="users">
        <button onClick={getUser}>Show Users</button>
        {usersList.map((val) => {
          return (
            <div className="user-output">
              <div>
              <h3>Name: {val.id}</h3>
              <h3>Lastname: {val.lname}</h3>
              <h3>Email: {val.email}</h3>
              <h3>Account: {val.account}</h3>
              <h3>Role: {val.role}</h3>
              </div>
              <div>


              </div>
            </div>
          );
        })}

      </div>


  );
}
export default Fetching